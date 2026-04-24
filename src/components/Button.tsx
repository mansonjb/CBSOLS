import Link from 'next/link'
import type { ReactNode, CSSProperties } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

const sizeStyles: Record<Size, CSSProperties> = {
  sm: { padding: '0.55rem 1.25rem', fontSize: '0.62rem', letterSpacing: '0.14em' },
  md: { padding: '0.875rem 2rem', fontSize: '0.7rem', letterSpacing: '0.14em' },
  lg: { padding: '1rem 2.5rem', fontSize: '0.72rem', letterSpacing: '0.15em' },
}

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    backgroundColor: 'var(--terra)',
    color: '#fff',
    fontWeight: 700,
  },
  outline: {
    border: '1.5px solid var(--border-strong)',
    color: 'var(--dark-2)',
    fontWeight: 600,
    backgroundColor: 'transparent',
  },
  ghost: {
    color: 'var(--dark-2)',
    fontWeight: 500,
    backgroundColor: 'transparent',
  },
  whatsapp: {
    backgroundColor: '#25D366',
    color: '#fff',
    fontWeight: 700,
  },
}

const baseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  textTransform: 'uppercase',
  textDecoration: 'none',
  borderRadius: '999px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.2s, transform 0.2s, background-color 0.2s',
}

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  /** Override styles partiellement */
  style?: CSSProperties
  className?: string
}

interface AsLinkProps extends ButtonBaseProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
  disabled?: never
}
interface AsButtonProps extends ButtonBaseProps {
  href?: never
  external?: never
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type ButtonProps = AsLinkProps | AsButtonProps

/**
 * Bouton unifié pour tout le site (Devis, Appeler, Voir, etc).
 * Utilise href pour Link Next, sinon rend un <button>.
 *
 * Usage :
 *   <Button href="/contact" variant="primary" size="lg">Devis gratuit</Button>
 *   <Button onClick={...} variant="outline">Annuler</Button>
 */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, style: customStyle, className } = props
  const computed: CSSProperties = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...customStyle,
  }

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={className} style={computed}>
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={className} style={computed}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={className}
      style={{ ...computed, opacity: props.disabled ? 0.6 : 1 }}
    >
      {children}
    </button>
  )
}
