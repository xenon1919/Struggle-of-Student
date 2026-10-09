import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/events', label: 'Events' },
  { to: '/meetings', label: 'Sessions' },
  { to: '/talent', label: 'Talent' },
]

const communityItems = [
  { to: '/team', label: 'Our Team & Leadership' },
  { to: '/placements', label: 'Placements' },
  { to: '/services', label: 'Our Services' },
  { to: '/ambassador', label: 'Campus Ambassador' },
  { to: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const communityRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (communityRef.current && !communityRef.current.contains(e.target)) setCommunityOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
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
          <Logo size={38} />
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

          <div ref={communityRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setCommunityOpen((v) => !v)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 15, fontWeight: 700, padding: '7px 14px', borderRadius: 999,
                color: 'var(--color-ink-soft)', background: 'transparent', border: 'none', cursor: 'pointer',
              }}
            >
              Community <ChevronDown size={15} style={{ transform: communityOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }} />
            </button>
            {communityOpen && (
              <div
                style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: 0, minWidth: 220,
                  background: '#fff', border: '2.5px solid var(--color-ink)', borderRadius: 'var(--radius-sm)',
                  boxShadow: '5px 5px 0 var(--color-ink)', padding: 8, display: 'flex', flexDirection: 'column', gap: 2,
                }}
              >
                {communityItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setCommunityOpen(false)}
                    style={({ isActive }) => ({
                      fontSize: 14.5, fontWeight: 600, padding: '9px 12px', borderRadius: 10,
                      color: isActive ? 'var(--color-primary-dark)' : 'var(--color-ink)',
                      background: isActive ? 'var(--color-primary-soft)' : 'transparent',
                    })}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <Link to="/join" className="btn btn-accent" style={{ padding: '10px 18px' }}>
            <Heart size={15} /> Join Community
          </Link>
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
        <div className="nav-mobile" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16, maxHeight: 'calc(100vh - 70px)', overflowY: 'auto' }}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} style={{ fontWeight: 600, fontSize: 16 }}>
              {item.label}
            </NavLink>
          ))}
          <div style={{ height: 1, background: 'var(--color-border)', margin: '4px 0' }} />
          {communityItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} style={{ fontWeight: 600, fontSize: 16 }}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/join" onClick={() => setOpen(false)} className="btn btn-accent" style={{ justifyContent: 'center', marginTop: 8 }}>
            <Heart size={15} /> Join Community
          </Link>
          <Link to="/volunteer" onClick={() => setOpen(false)} className="btn btn-primary" style={{ justifyContent: 'center' }}>
            Volunteer
          </Link>
        </div>
      )}

      <style>{`
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 18px;
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
        @media (max-width: 1000px) {
          .nav-desktop { display: none; }
          .nav-toggle { display: inline-flex; }
        }
      `}</style>
    </header>
  )
}
