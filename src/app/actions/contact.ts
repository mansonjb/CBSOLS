'use server'

import nodemailer from 'nodemailer'

export interface ContactState {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name')?.toString().trim() ?? ''
  const phone = formData.get('phone')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const city = formData.get('city')?.toString().trim() ?? ''
  const projectType = formData.get('project_type')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''

  if (!name || !phone || !email) {
    return { status: 'error', message: 'Nom, téléphone et email sont obligatoires.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Adresse email invalide.' }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const htmlBody = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D0C0A; color: #F0EBE3; padding: 40px;">
      <div style="border-bottom: 2px solid #C4714A; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="font-size: 24px; color: #C4714A; margin: 0;">Nouvelle demande de devis</h1>
        <p style="color: #8A8070; margin: 8px 0 0; font-size: 14px;">CB Sols, cbsols.fr</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Nom</td>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #F0EBE3; font-size: 15px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08);"><a href="tel:${phone}" style="color: #C4714A; font-size: 18px; font-weight: bold; text-decoration: none;">${phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08);"><a href="mailto:${email}" style="color: #C4714A; text-decoration: none;">${email}</a></td>
        </tr>
        ${city ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Ville</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #F0EBE3;">${city}</td></tr>` : ''}
        ${projectType ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Type de projet</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #F0EBE3;">${projectType}</td></tr>` : ''}
      </table>

      ${message ? `
      <div style="margin-top: 30px; padding: 20px; background: rgba(240,235,227,0.04); border-left: 3px solid #C4714A;">
        <div style="color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Message</div>
        <p style="color: #B8AFA4; line-height: 1.7; margin: 0; font-size: 14px;">${message.replace(/\n/g, '<br>')}</p>
      </div>` : ''}

      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 11px;">
        Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  `

  const autoReplyHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D0C0A; color: #F0EBE3; padding: 40px;">
      <h1 style="font-size: 24px; color: #C4714A; margin: 0 0 8px;">Votre demande a bien été reçue</h1>
      <p style="color: #8A8070; font-size: 14px; margin: 0 0 30px;">CB Sols : Revêtements de sol en Charente-Maritime</p>

      <p style="color: #B8AFA4; line-height: 1.7;">Bonjour ${name},</p>
      <p style="color: #B8AFA4; line-height: 1.7;">
        Nous avons bien reçu votre demande${projectType ? ` concernant : <strong style="color: #F0EBE3;">${projectType}</strong>` : ''}.
        Valentin Prévoteau vous recontactera sous <strong style="color: #C4714A;">48h ouvrées</strong> pour faire le point sur votre projet.
      </p>
      <p style="color: #B8AFA4; line-height: 1.7;">
        En attendant, n'hésitez pas à nous appeler directement au <a href="tel:+33685052880" style="color: #C4714A; text-decoration: none;">06 85 05 28 80</a>.
      </p>
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(240,235,227,0.08);">
        <p style="color: #8A8070; font-size: 12px; margin: 0;">CB Sols Revêtements<br>8 rue des Merises, 17230 Villedoux<br>contact@cbsols.fr</p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `[CB Sols] Devis | ${projectType || 'Nouveau contact'} | ${name}`,
      html: htmlBody,
    })

    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: email,
      subject: 'CB Sols : Votre demande a bien été reçue',
      html: autoReplyHtml,
    })

    return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons sous 48h.' }
  } catch (err) {
    console.error('Email error:', err)
    return { status: 'error', message: 'Une erreur est survenue. Appelez-nous directement au 06 85 05 28 80.' }
  }
}
