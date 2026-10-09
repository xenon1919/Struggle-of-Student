import PageHero from '../components/PageHero'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { teamMembers, leadership } from '../data/siteData'
import { Users, Crown } from 'lucide-react'

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow={<><Users size={14} /> Our Team</>}
        title="The people behind Struggle of Student"
        subtitle="A community-driven team of students and leaders building this, one opportunity at a time."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow"><Crown size={14} /> Leadership</span>
              <h2 className="section-title">Founder & Directors</h2>
              <p className="section-subtitle">The people steering the vision and the day-to-day.</p>
            </div>
          </Reveal>
          <div className="grid grid-3">
            {leadership.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <div className={`card card-hover card-${p.variant}`} style={{ textAlign: 'center', '--tilt': i % 2 === 0 ? '-1.5deg' : '1.5deg' }}>
                  <ImagePlaceholder src={p.image} alt={p.name} label={p.name} icon={Crown} variant={p.variant} ratio="1 / 1" style={{ marginBottom: 16, maxWidth: 160, margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: 18 }}>{p.name}</h3>
                  <span className="badge badge-green" style={{ margin: '8px 0' }}>{p.designation}</span>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 14, marginTop: 6 }}>{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow"><Users size={14} /> The Team</span>
              <h2 className="section-title">Meet the people making it happen</h2>
              <p className="section-subtitle">
                <strong style={{ color: 'var(--color-primary-dark)' }}>
                  <AnimatedCounter value={`${teamMembers.length}+`} /> active members
                </strong>{' '}
                across campuses, keeping events, content, and outreach running.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-4">
            {teamMembers.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.05}>
                <div className={`card card-hover card-${m.variant}`} style={{ textAlign: 'center', padding: 20, '--tilt': i % 2 === 0 ? '-2deg' : '2deg' }}>
                  <ImagePlaceholder src={m.image} alt={m.name} label={m.name} icon={Users} variant={m.variant} ratio="1 / 1" style={{ marginBottom: 14 }} />
                  <h3 style={{ fontSize: 15.5 }}>{m.name}</h3>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 13, marginTop: 4 }}>{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
