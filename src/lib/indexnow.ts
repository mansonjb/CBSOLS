/**
 * IndexNow client : permet de notifier Bing / Yandex / autres moteurs
 * compatibles dès qu'une page est ajoutée, mise à jour ou supprimée.
 *
 * Protocole : https://www.indexnow.org/documentation
 *
 * La clé est publique (placée en /public/<key>.txt pour la vérification de
 * possession du domaine). Elle ne donne aucun pouvoir particulier, juste
 * d'identifier la propriété cbsols.fr.
 */
const INDEXNOW_KEY = '4d49cd1fe0334cc59c37346debc07c0f'
const INDEXNOW_HOST = 'cbsols.fr'
const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`

export interface IndexNowResult {
  ok: boolean
  status: number
  message: string
}

/**
 * Notifie IndexNow d'une ou plusieurs URLs. Bing transmet aux autres moteurs
 * compatibles (Yandex, Seznam, Naver, et indirectement DuckDuckGo qui
 * partage l'index Bing).
 *
 * - Single URL : envoie un GET à api.indexnow.org/IndexNow?url=...&key=...
 * - Multi URLs : envoie un POST avec body JSON listant les URLs (max 10000)
 */
export async function pingIndexNow(urls: string | string[]): Promise<IndexNowResult> {
  const urlList = Array.isArray(urls) ? urls : [urls]
  if (urlList.length === 0) {
    return { ok: false, status: 400, message: 'Aucune URL fournie' }
  }

  // Sécurité : on ne ping que des URLs du domaine cbsols.fr
  const valid = urlList.filter((u) => u.startsWith(`https://${INDEXNOW_HOST}/`) || u === `https://${INDEXNOW_HOST}`)
  if (valid.length === 0) {
    return { ok: false, status: 400, message: 'Aucune URL valide (toutes hors domaine)' }
  }

  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: valid,
      }),
    })

    // IndexNow renvoie :
    //  - 200 OK : URLs reçues et acceptées
    //  - 202 Accepted : URLs reçues mais pas encore validées (souvent côté Bing)
    //  - 400 Bad Request : payload invalide
    //  - 403 Forbidden : clé invalide ou mismatch keyLocation
    //  - 422 Unprocessable Entity : URLs hors domaine
    //  - 429 Too Many Requests : rate limit
    const message = res.ok
      ? `${valid.length} URL(s) soumise(s) à IndexNow`
      : `Erreur IndexNow ${res.status}: ${await res.text().catch(() => '')}`

    return { ok: res.ok, status: res.status, message }
  } catch (err) {
    return {
      ok: false,
      status: 0,
      message: `Erreur réseau : ${err instanceof Error ? err.message : String(err)}`,
    }
  }
}
