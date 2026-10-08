import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Sparkles, Users, CalendarHeart, HeartHandshake, Camera, Link2, PlayCircle, MessageCircle, Rocket, Star } from 'lucide-react'
import { opportunities, talents, upcomingEvents, galleryImages, socialLinks } from '../data/siteData'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import Blob from '../components/Blob'
import Marquee from '../components/Marquee'
import AnimatedCounter from '../components/AnimatedCounter'

const iconMap = { whatsapp: MessageCircle, instagram: Camera, linkedin: Link2, youtube: PlayCircle }

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <OpportunitiesPreview />
      <TalentPreview />
      <AmbassadorPreview />
      <EventsPreview />
      <GalleryStrip />
      <SocialPreview />
      <VolunteerCTA />
    </>
  )
}

function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 0' }}>
      <Blob color="var(--color-sun-soft)" size={340} style={{ top: -80, left: -100 }} />
      <Blob color="var(--color-pink-soft)" size={300} style={{ top: 40, right: -120, animationDelay: '1.5s' }} />
      <Blob color="var(--color-sky-soft)" size={260} style={{ bottom: -100, left: '35%', animationDelay: '3s' }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 56, flexWrap: 'wrap', zIndex: 1, paddingBottom: 64 }}>
        <div style={{ flex: '1 1 440px', minWidth: 300 }}>
          <Reveal>
            <span className="eyebrow"><Sparkles size={14} /> A community hub for students</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ fontSize: 'clamp(38px, 5.8vw, 60px)', marginBottom: 22 }}>
              Your corner of the internet to <span className="marker">grow</span>, show up, and <span className="grad-text">be seen.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, color: 'var(--color-ink-soft)', maxWidth: 520, marginBottom: 32 }}>
              Struggle of Student brings together opportunities, talent, events, and a community of students helping students — one step at a time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/opportunities" className="btn btn-primary">
                Explore Opportunities <ArrowRight size={17} />
              </Link>
              <Link to="/volunteer" className="btn btn-outline">
                Volunteer With Us
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} style={{ flex: '1 1 380px', minWidth: 300, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <ImagePlaceholder
              src="/images/hero.webp"
              alt="Indian college students laughing together on campus steps"
              label="Hero image — students together"
              icon={Rocket}
              variant="coral"
              ratio="3 / 2"
              style={{ boxShadow: '8px 8px 0 var(--color-ink)', border: '3px solid var(--color-ink)', transform: 'rotate(1.5deg)' }}
            />
            <span className="sticker" style={{ top: -16, left: -16 }}>
              <Star size={14} fill="var(--color-sun)" color="var(--color-sun-dark)" /> 2,000+ students
            </span>
            <span className="sticker" style={{ bottom: -16, right: -8, transform: 'rotate(4deg)' }}>
              ✨ Join the community
            </span>
          </div>
        </Reveal>
      </div>

      <div style={{ borderTop: '2.5px solid var(--color-ink)', borderBottom: '2.5px solid var(--color-ink)', background: 'var(--color-sun)', padding: '16px 0', position: 'relative', zIndex: 1 }}>
        <Marquee />
      </div>
    </section>
  )
}

function TrustStrip() {
  const stats = [
    { label: 'Students reached', value: '2,000+', variant: 'coral' },
    { label: 'Events hosted', value: '15+', variant: 'pink' },
    { label: 'Campus Ambassadors', value: '40+', variant: 'sky' },
    { label: 'Opportunities shared', value: '100+', variant: 'purple' },
  ]
  return (
    <section style={{ padding: '64px 0 48px', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="grid grid-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div
                className={`card card-${s.variant}`}
                style={{ textAlign: 'center', padding: '22px 12px', '--tilt': i % 2 === 0 ? '-1.5deg' : '1.5deg' }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 34, fontWeight: 800, color: 'var(--color-ink)' }}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--color-ink-soft)', fontWeight: 600 }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function OpportunitiesPreview() {
  return (
    <section className="section section-alt" id="opportunities">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><Compass size={14} /> Opportunities</span>
            <h2 className="section-title">Open doors, not just listings</h2>
            <p className="section-subtitle">Fellowships, internships, scholarships, and challenges — curated so you don't have to dig.</p>
          </div>
        </Reveal>
        <div className="grid grid-2">
          {opportunities.slice(0, 4).map((op, i) => (
            <Reveal key={op.id} delay={i * 0.06} style={i === 0 ? { gridColumn: '1 / -1' } : undefined}>
              <div
                className="card card-hover"
                style={{ '--tilt': i % 2 === 0 ? '-1deg' : '1deg', display: i === 0 ? 'flex' : 'block', alignItems: i === 0 ? 'center' : undefined, gap: i === 0 ? 28 : undefined, flexWrap: 'wrap' }}
              >
                <div style={{ flex: i === 0 ? '1 1 auto' : undefined }}>
                  <span className={`badge ${op.tag}`}>{op.type}</span>
                  <h3 style={{ fontSize: i === 0 ? 23 : 19, margin: '14px 0 6px' }}>{op.title}</h3>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5, marginBottom: 12 }}>{op.description}</p>
                  <div style={{ fontSize: 13, color: 'var(--color-ink-soft)', display: 'flex', gap: 16, fontWeight: 600 }}>
                    <span>{op.org}</span>
                    <span>{op.deadline}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link to="/opportunities" className="btn btn-primary">See all opportunities <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function TalentPreview() {
  return (
    <section className="section" id="talent">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><Sparkles size={14} /> Talent Showcase</span>
            <h2 className="section-title">Students doing remarkable things</h2>
            <p className="section-subtitle">Art, code, music, words — this is where student talent gets its spotlight.</p>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {talents.slice(0, 3).map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div
                className={`card card-hover card-${t.variant}`}
                style={{ textAlign: 'center', padding: 20, '--tilt': i % 2 === 0 ? '-2deg' : '2deg' }}
              >
                <ImagePlaceholder src={t.image} alt={t.name} label={t.name} icon={Sparkles} variant={t.variant} ratio="1 / 1" style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 17 }}>{t.name}</h3>
                <span className="badge badge-blue" style={{ margin: '8px 0' }}>{t.skill}</span>
                <p style={{ color: 'var(--color-ink-soft)', fontSize: 14 }}>{t.achievement}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link to="/talent" className="btn btn-outline">Visit the showcase <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function AmbassadorPreview() {
  return (
    <section className="section section-alt" id="ambassador">
      <div className="container">
        <Reveal>
          <div
            className="card"
            style={{
              display: 'flex', alignItems: 'center', gap: 44, flexWrap: 'wrap',
              padding: 48, background: 'var(--color-primary-dark)', color: '#fff',
              position: 'relative', overflow: 'hidden', boxShadow: '8px 8px 0 var(--color-sun)',
            }}
          >
            <Blob color="rgba(255,255,255,0.14)" size={260} style={{ top: -100, right: -60 }} />
            <div style={{ flex: '1 1 320px', position: 'relative', zIndex: 1 }}>
              <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', borderColor: '#fff' }}>
                <Users size={14} /> Campus Ambassador Program
              </span>
              <h2 style={{ color: '#fff', fontSize: 28, margin: '14px 0 10px' }}>Lead the community on your campus</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15.5, maxWidth: 460 }}>
                Represent Struggle of Student at your college, host local events, and build your leadership story — with certificates, swag, and a network behind you.
              </p>
            </div>
            <Link to="/ambassador" className="btn btn-accent" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
              Learn & Apply <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function EventsPreview() {
  return (
    <section className="section" id="events">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><CalendarHeart size={14} /> Events</span>
            <h2 className="section-title">Where the community meets</h2>
            <p className="section-subtitle">From open mics to workshops — see what's coming up next.</p>
          </div>
        </Reveal>
        <div className="grid grid-2">
          {upcomingEvents.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <div className={`card card-hover card-${e.variant}`} style={{ padding: 0, overflow: 'hidden', '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                <ImagePlaceholder src={e.image} alt={e.title} label={e.title} icon={CalendarHeart} variant={e.variant} ratio="16 / 8" radius="0" style={{ border: 'none', borderBottom: '2.5px solid var(--color-ink)' }} />
                <div style={{ padding: 24 }}>
                  <span className="badge badge-orange">{e.date}</span>
                  <h3 style={{ fontSize: 19, margin: '14px 0 6px' }}>{e.title}</h3>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5, marginBottom: 10 }}>{e.description}</p>
                  <p style={{ fontSize: 13.5, color: 'var(--color-ink-soft)' }}>📍 {e.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link to="/events" className="btn btn-outline">See all events <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function GalleryStrip() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow"><Camera size={14} /> Moments</span>
            <h2 className="section-title">Straight from the community</h2>
            <p className="section-subtitle">A peek into meetups, showcases, and everything in between.</p>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delay={i * 0.05}>
              <ImagePlaceholder
                src={img.image}
                alt={img.label}
                label={img.label}
                icon={Camera}
                variant={img.variant}
                ratio={i % 3 === 0 ? '4 / 5' : '4 / 3'}
                style={{ border: '2.5px solid var(--color-ink)', boxShadow: '5px 5px 0 var(--color-ink)', transform: `rotate(${i % 2 === 0 ? '-1deg' : '1deg'})` }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialPreview() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal>
          <h2 className="section-title" style={{ marginBottom: 10 }}>Stay close to the community</h2>
          <p className="section-subtitle" style={{ marginBottom: 32 }}>Follow along for daily opportunities, event drops, and student stories.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            {socialLinks.map((link) => {
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
  )
}

function VolunteerCTA() {
  return (
    <section className="section section-alt" id="volunteer" style={{ position: 'relative', overflow: 'hidden' }}>
      <Blob color="var(--color-pink-soft)" size={280} style={{ top: -60, right: '10%' }} />
      <div className="container" style={{ textAlign: 'center', maxWidth: 620, position: 'relative' }}>
        <Reveal>
          <span className="eyebrow"><HeartHandshake size={14} /> Volunteer</span>
          <h2 className="section-title">Give an hour, change someone's week</h2>
          <p className="section-subtitle" style={{ marginBottom: 28 }}>
            Help run events, mentor peers, or support outreach. No experience needed — just willingness.
          </p>
          <Link to="/volunteer" className="btn btn-primary">Apply to Volunteer <ArrowRight size={17} /></Link>
        </Reveal>
      </div>
    </section>
  )
}
