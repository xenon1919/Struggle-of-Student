import { Link } from 'react-router-dom'
import { Camera, Link2, PlayCircle, MessageCircle, Sprout } from 'lucide-react'
import { socialLinks } from '../data/siteData'

const iconMap = {
  whatsapp: MessageCircle,
  instagram: Camera,
  linkedin: Link2,
  youtube: PlayCircle,
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary-dark)', color: 'rgba(255,255,255,0.85)', padding: '56px 0 28px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ display: 'grid', placeItems: 'center', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.15)' }}>
                <Sprout size={18} color="#fff" />
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', fontSize: 17 }}>
                Struggle of Student
              </span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, maxWidth: 260 }}>
              A peaceful corner of the internet where students find opportunities, show their talent, and grow together.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 700, color: '#fff', marginBottom: 14 }}>Explore</p>
            <FooterLinks links={[
              { to: '/opportunities', label: 'Opportunities' },
              { to: '/talent', label: 'Talent Showcase' },
              { to: '/careers', label: 'Careers' },
              { to: '/events', label: 'Events' },
            ]} />
          </div>

          <div>
            <p style={{ fontWeight: 700, color: '#fff', marginBottom: 14 }}>Get Involved</p>
            <FooterLinks links={[
              { to: '/ambassador', label: 'Campus Ambassador' },
              { to: '/volunteer', label: 'Volunteer With Us' },
              { to: '/contact', label: 'Contact Us' },
            ]} />
          </div>

          <div>
            <p style={{ fontWeight: 700, color: '#fff', marginBottom: 14 }}>Follow Along</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.id]
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    style={{
                      display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 10,
                      background: 'rgba(255,255,255,0.12)',
                    }}
                  >
                    {Icon && <Icon size={17} color="#fff" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20, fontSize: 13.5, textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
          © {new Date().getFullYear()} Struggle of Student. Made with care, by students, for students.
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {links.map((link) => (
        <Link key={link.to} to={link.to} style={{ fontSize: 14.5 }}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}
