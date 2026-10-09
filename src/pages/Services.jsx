import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { services } from '../data/siteData'
import { Music, Calendar, Code2, HeartHandshake, Briefcase, Sparkles, Mail, ArrowRight } from 'lucide-react'

const iconMap = {
  music: Music,
  calendar: Calendar,
  code: Code2,
  'heart-handshake': HeartHandshake,
  briefcase: Briefcase,
  sparkles: Sparkles,
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow={<><Sparkles size={14} /> Our Services</>}
        title="What Struggle of Student provides"
        subtitle="From events to tech to guidance — here's where we can support students and organizations alike."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Sparkles
              return (
                <Reveal key={s.id} delay={i * 0.06}>
                  <div className={`card card-hover card-${s.variant}`} style={{ '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                      <span style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--color-primary-soft)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        <Icon size={22} color="var(--color-primary-dark)" />
                      </span>
                      <div>
                        <h3 style={{ fontSize: 19, marginBottom: 4 }}>{s.title}</h3>
                        <p style={{ color: 'var(--color-ink-soft)', fontSize: 14 }}>{s.summary}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-ink)', marginBottom: 2 }}>What we provide</p>
                        <p style={{ fontSize: 14, color: 'var(--color-ink-soft)' }}>{s.provide}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-ink)', marginBottom: 2 }}>How to approach us</p>
                        <p style={{ fontSize: 14, color: 'var(--color-ink-soft)' }}>{s.approach}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', borderTop: '1.5px solid var(--color-border)', paddingTop: 14 }}>
                      <span style={{ fontSize: 13.5, fontWeight: 700 }}>{s.contact}</span>
                      <a href={`mailto:${s.email}`} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: 13.5 }}>
                        <Mail size={14} /> {s.email}
                      </a>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <p style={{ color: 'var(--color-ink-soft)', marginBottom: 16 }}>Not sure which service fits? Just ask us directly.</p>
              <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={17} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
