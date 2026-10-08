import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { opportunities } from '../data/siteData'
import { Compass } from 'lucide-react'

export default function Opportunities() {
  return (
    <>
      <PageHero
        eyebrow={<><Compass size={14} /> Opportunities</>}
        title="Opportunities worth your time"
        subtitle="Fellowships, internships, scholarships, and competitions — handpicked for students at every stage."
      />
      <section className="section">
        <div className="container">
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
