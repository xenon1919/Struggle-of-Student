import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sprout } from 'lucide-react'

const navItems = [
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/talent', label: 'Talent' },
  { to: '/careers', label: 'Careers' },
  { to: '/ambassador', label: 'Ambassador' },
  { to: '/events', label: 'Events' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(253, 251, 246, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }} onClick={() => setOpen(false)}>
          <span style={{
            display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 12,
            background: 'var(--gradient-primary)', color: '#fff', boxShadow: 'var(--shadow-glow-primary)',
          }}>
            <Sprout size={20} />
          </span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19, color: 'var(--color-ink)' }}>
            Struggle of Student
          </span>
        </Link>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                fontSize: 15,
                fontWeight: 700,
                padding: '7px 14px',
                borderRadius: 999,
                color: isActive ? 'var(--color-primary-dark)' : 'var(--color-ink-soft)',
                background: isActive ? 'var(--color-primary-soft)' : 'transparent',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/volunteer" className="btn btn-primary" style={{ padding: '10px 20px' }}>
            Volunteer
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="nav-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} style={{ fontWeight: 600, fontSize: 16 }}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/volunteer" onClick={() => setOpen(false)} className="btn btn-primary" style={{ justifyContent: 'center' }}>
            Volunteer
          </Link>
        </div>
      )}

      <style>{`
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-primary-dark);
          padding: 4px;
          flex-shrink: 0;
        }
        @media (max-width: 860px) {
          .nav-desktop { display: none; }
          .nav-toggle { display: inline-flex; }
        }
      `}</style>
    </header>
  )
}
