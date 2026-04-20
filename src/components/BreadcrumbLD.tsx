export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Server component that injects a BreadcrumbList JSON-LD.
 * URLs must be fully qualified (https://cbsols.fr/...) for Google rich results.
 */
export function BreadcrumbLD({ items }: { items: BreadcrumbItem[] }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
