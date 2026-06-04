'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { logoutAction } from './actions'

const NAV = [
  { href: '/admin', label: 'Tableau de bord', exact: true, icon: 'dashboard' },
  { href: '/admin/leads', label: 'Demandes', icon: 'leads' },
  { href: '/admin/contacts', label: 'Contacts', icon: 'clients' },
]

function Icon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'dashboard': return (<svg {...common}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>)
    case 'leads':     return (<svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11h-6M19 8v6"/></svg>)
    case 'clients':   return (<svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>)
    case 'chantiers': return (<svg {...common}><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>)
    default: return null
  }
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? ''
  const [mobileOpen, setMobileOpen] = useState(false)

  // Login page : pas de shell
  if (pathname.startsWith('/admin/login')) {
    return <>{children}</>
  }

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + '/')

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '260px 1fr', backgroundColor: 'var(--bg)' }} className="admin-shell">

      {/* Sidebar */}
      <aside style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        backgroundColor: 'var(--bg-card)',
        borderRight: '1px solid var(--border)',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }} className={`admin-sidebar ${mobileOpen ? 'open' : ''}`}>

        {/* Logo */}
        <Link href="/admin" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 0.75rem', marginBottom: '1rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.04em' }}>
            CB
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>CB Sols</div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--terra)', textTransform: 'uppercase', marginTop: 1, fontWeight: 600 }}>CRM</div>
          </div>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {NAV.map((item) => {
            const active = isActive(item.href, item.exact)
            return (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '0.7rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: active ? 'rgba(44, 85, 48, 0.10)' : 'transparent',
                color: active ? 'var(--terra)' : 'var(--dark-2)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: active ? 600 : 500,
                transition: 'all 0.15s',
                position: 'relative',
              }}>
                {active && <span style={{ position: 'absolute', left: 0, top: '20%', height: '60%', width: 3, backgroundColor: 'var(--terra)', borderRadius: '0 3px 3px 0' }} />}
                <Icon name={item.icon} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.55rem 0.85rem', fontSize: '0.75rem', color: 'var(--text-muted)',
            textDecoration: 'none', borderRadius: '6px',
          }}>
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
              <path d="M3 12L12 3l9 9M5 10v10h14V10"/>
            </svg>
            Voir le site public
          </Link>
          <form action={logoutAction}>
            <button type="submit" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              width: '100%', padding: '0.55rem 0.85rem', fontSize: '0.75rem', color: 'var(--text-muted)',
              border: 'none', backgroundColor: 'transparent', borderRadius: '6px',
              cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
            }}>
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
              </svg>
              Se déconnecter
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile burger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
        className="admin-burger"
        style={{
          display: 'none',
          position: 'fixed', top: 12, left: 12, zIndex: 60,
          width: 44, height: 44, borderRadius: 8,
          backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth={1.7}>
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      {/* Backdrop mobile */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 40 }} className="admin-backdrop" />
      )}

      {/* Main */}
      <main style={{ minWidth: 0 }}>
        {children}
      </main>

      <style>{`
        @media (max-width: 900px) {
          .admin-shell { grid-template-columns: 1fr !important; }
          .admin-sidebar {
            position: fixed !important;
            top: 0; left: 0;
            width: 280px;
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
            z-index: 50;
          }
          .admin-sidebar.open { transform: translateX(0); }
          .admin-burger { display: flex !important; }
          main { padding-top: 70px; }
        }
      `}</style>
    </div>
  )
}
