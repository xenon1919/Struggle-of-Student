import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { opportunities } from '../data/siteData'
import { Compass, Briefcase, Users, HeartHandshake, CalendarHeart, Sparkles, Video, ArrowRight } from 'lucide-react'

const categories = [
  { to: '/careers', label: 'Internships & Jobs', icon: Briefcase, variant: 'sky' },
  { to: '/ambassador', label: 'Campus Ambassador', icon: Users, variant: 'purple' },
  { to: '/volunteer', label: 'Volunteering', icon: HeartHandshake, variant: 'green' },
  { to: '/events', label: 'Events', icon: CalendarHeart, variant: 'coral' },
  { to: '/talent', label: 'Talent Showcase', icon: Sparkles, variant: 'pink' },
  { to: '/meetings', label: 'Sessions & Workshops', icon: Video, variant: 'sun' },
]

export default function Opportunities() {
  return (
    <>
      <PageHero
        eyebrow={<><Compass size={14} /> Opportunities</>}
        title="Everything you can get through SS"
        subtitle="Fellowships, internships, scholarships, and competitions — plus every other door we open for students."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="section-title" style={{ fontSize: 26 }}>Pick your path</h2>
              <p className="section-subtitle">Every opportunity type we offer, one tap away.</p>
            </div>
          </Reveal>
          <div className="grid grid-3" style={{ marginBottom: 64 }}>
            {categories.map((c, i) => (
              <Reveal key={c.to} delay={i * 0.05}>
                <Link to={c.to} className={`card card-hover card-${c.variant}`} style={{ display: 'flex', alignItems: 'center', gap: 14, '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                  <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--color-primary-soft)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <c.icon size={20} color="var(--color-primary-dark)" />
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 15.5 }}>{c.label}</span>
                  <ArrowRight size={16} style={{ marginLeft: 'auto', flexShrink: 0 }} />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="section-head">
              <h2 className="section-title" style={{ fontSize: 26 }}>Curated right now</h2>
              <p className="section-subtitle">Fellowships, internships, scholarships, and competitions handpicked for students at every stage.</p>
            </div>
          </Reveal>
          <div className="grid grid-2">
            {opportunities.map((op, i) => (
              <Reveal key={op.id} delay={i * 0.05}>
                <div className="card card-hover" style={{ '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                  <span className={`badge ${op.tag}`}>{op.type}</span>
                  <h3 style={{ fontSize: 20, margin: '14px 0 6px' }}>{op.title}</h3>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 15, marginBottom: 14 }}>{op.description}</p>
                  <div style={{ fontSize: 13.5, color: 'var(--color-ink-soft)', display: 'flex', justifyContent: 'space-between', borderTop: '2px solid var(--color-border)', paddingTop: 12, fontWeight: 600 }}>
                    <span>{op.org}</span>
                    <span>Deadline: {op.deadline}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
