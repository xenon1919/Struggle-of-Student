import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { socialLinks } from '../data/siteData'
import { Camera, Link2, PlayCircle, MessageCircle, Heart, CheckCircle2 } from 'lucide-react'

const iconMap = { whatsapp: MessageCircle, instagram: Camera, linkedin: Link2, youtube: PlayCircle }

const steps = [
  'Tap "Join the WhatsApp Community" below.',
  'Introduce yourself in the group — name, college, and what you\'re looking for.',
  'Follow us on Instagram & YouTube so you never miss an update.',
]

const whatsapp = socialLinks.find((l) => l.id === 'whatsapp')
const otherLinks = socialLinks.filter((l) => l.id !== 'whatsapp')

export default function Join() {
  return (
    <>
      <PageHero
        eyebrow={<><Heart size={14} /> Join Our Community</>}
        title="A platform built by students, for students"
        subtitle="One tap gets you into a community of students sharing opportunities, events, and support — no forms, no waiting."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          <Reveal>
            <div className="card" style={{ textAlign: 'center', padding: 40, marginBottom: 32 }}>
              <h3 style={{ fontSize: 22, marginBottom: 10 }}>Start here</h3>
              <p style={{ color: 'var(--color-ink-soft)', fontSize: 15, marginBottom: 26 }}>
                Our WhatsApp community is the fastest way in — this is where events, opportunities, and announcements land first.
              </p>
              {whatsapp && (
                <a href={whatsapp.href} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '16px 28px', fontSize: 16 }}>
                  <MessageCircle size={18} /> Join the WhatsApp Community
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card" style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, marginBottom: 16 }}>How it works</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {steps.map((step) => (
                  <div key={step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle2 size={19} color="var(--color-primary-dark)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontSize: 14.5, color: 'var(--color-ink-soft)' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="section-head" style={{ marginBottom: 20 }}>
              <h3 className="section-title" style={{ fontSize: 22 }}>Stay close on every channel</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              {otherLinks.map((link) => {
                const Icon = iconMap[link.id]
                return (
                  <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className="btn btn-outline">
                    {Icon && <Icon size={17} />} {link.label}
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
