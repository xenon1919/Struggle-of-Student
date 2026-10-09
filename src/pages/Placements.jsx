import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { placements } from '../data/siteData'
import { Briefcase, Building2, Users } from 'lucide-react'

export default function Placements() {
  const totalPlaced = placements.reduce((sum, p) => sum + p.studentsPlaced, 0)

  return (
    <>
      <PageHero
        eyebrow={<><Briefcase size={14} /> Student Placements</>}
        title="Opportunities that turned into offers"
        subtitle="A look at the students who found roles through the Struggle of Student network."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="grid grid-3" style={{ marginBottom: 56 }}>
              <div className="card card-coral" style={{ textAlign: 'center', '--tilt': '-1.5deg' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>
                  <AnimatedCounter value={`${totalPlaced}+`} />
                </div>
                <p style={{ color: 'var(--color-ink-soft)', fontSize: 14, fontWeight: 600 }}>Students placed</p>
              </div>
              <div className="card card-sky" style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>
                  <AnimatedCounter value={`${placements.length}+`} />
                </div>
                <p style={{ color: 'var(--color-ink-soft)', fontSize: 14, fontWeight: 600 }}>Partner companies</p>
              </div>
              <div className="card card-purple" style={{ textAlign: 'center', '--tilt': '1.5deg' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>
                  <AnimatedCounter value="10+" />
                </div>
                <p style={{ color: 'var(--color-ink-soft)', fontSize: 14, fontWeight: 600 }}>Roles & domains</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-2">
            {placements.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <div className={`card card-hover card-${p.variant}`} style={{ '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--color-primary-soft)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <Building2 size={21} color="var(--color-primary-dark)" />
                    </span>
                    <div>
                      <h3 style={{ fontSize: 18 }}>{p.company}</h3>
                      <span className="badge badge-green">{p.studentsPlaced} student{p.studentsPlaced !== 1 ? 's' : ''} placed</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 6 }}>Roles</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: p.students.length ? 14 : 0 }}>
                    {p.roles.map((r) => (
                      <span key={r} className="badge badge-blue">{r}</span>
                    ))}
                  </div>
                  {p.students.length > 0 && (
                    <>
                      <p style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Users size={14} /> Placed students
                      </p>
                      <p style={{ color: 'var(--color-ink-soft)', fontSize: 14 }}>{p.students.join(', ')}</p>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
