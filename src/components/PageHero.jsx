import Blob from './Blob'
import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section style={{ padding: '80px 0 56px', background: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden' }}>
      <Blob color="var(--color-sun-soft)" size={260} style={{ top: -80, left: -60 }} />
      <Blob color="var(--color-sky-soft)" size={220} style={{ bottom: -70, right: -40 }} />
      <div className="container" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>{title}</h1>
          {subtitle && <p className="section-subtitle" style={{ marginTop: 14, fontSize: 17 }}>{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
