import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { careers } from '../data/siteData'
import { Briefcase, MapPin } from 'lucide-react'

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow={<><Briefcase size={14} /> Careers</>}
        title="Internships, jobs & career programs"
        subtitle="Real roles from our partner network — a head start on the career you actually want."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {careers.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <div className="card card-hover" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 4 }}>{job.title}</h3>
                    <p style={{ color: 'var(--color-ink-soft)', fontSize: 14 }}>{job.company}</p>
                    <p style={{ color: 'var(--color-ink-soft)', fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                      <MapPin size={13} /> {job.location}
                    </p>
                  </div>
                  <span className="badge badge-green">{job.type}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--color-ink-soft)', marginTop: 32, fontSize: 14.5 }}>
            New roles are added as our partner network grows — check back often.
          </p>
        </div>
      </section>
    </>
  )
}
