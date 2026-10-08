import PageHero from '../components/PageHero'
import { socialLinks } from '../data/siteData'
import { Camera, Link2, PlayCircle, MessageCircle, Mail } from 'lucide-react'

const iconMap = { whatsapp: MessageCircle, instagram: Camera, linkedin: Link2, youtube: PlayCircle }

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow={<><Mail size={14} /> Contact</>}
        title="Let's talk"
        subtitle="Questions, partnership ideas, or just want to say hi — reach us wherever you're most comfortable."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 480, textAlign: 'center' }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href="mailto:hello@struggleofstudent.com" className="btn btn-outline">
              <Mail size={17} /> hello@struggleofstudent.com
            </a>
            {socialLinks.map((link) => {
              const Icon = iconMap[link.id]
              return (
                <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className="btn btn-outline">
                  {Icon && <Icon size={17} />} {link.label}
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
