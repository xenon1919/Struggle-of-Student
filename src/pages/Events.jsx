import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { pastEvents, upcomingEvents } from '../data/siteData'
import { CalendarHeart, MapPin } from 'lucide-react'

export default function Events() {
  const [tab, setTab] = useState('upcoming')
  const list = tab === 'upcoming' ? upcomingEvents : pastEvents

  return (
    <>
      <PageHero
        eyebrow={<><CalendarHeart size={14} /> Events</>}
        title="Where the community meets"
        subtitle="Workshops, meetups, open mics, and drives — look back at what we've done, and what's next."
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            <TabButton active={tab === 'upcoming'} onClick={() => setTab('upcoming')}>Upcoming</TabButton>
            <TabButton active={tab === 'past'} onClick={() => setTab('past')}>Past Events</TabButton>
          </div>

          <div className="grid grid-2">
            {list.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06}>
                <div className={`card card-hover card-${e.variant || 'green'}`} style={{ padding: 0, overflow: 'hidden', '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                  <ImagePlaceholder src={e.image} alt={e.title} label={e.title} icon={CalendarHeart} variant={e.variant || 'green'} ratio="16 / 8" radius="0" style={{ border: 'none', borderBottom: '2.5px solid var(--color-ink)' }} />
                  <div style={{ padding: 24 }}>
                    <span className="badge badge-orange">{e.date}</span>
                    <h3 style={{ fontSize: 19, margin: '14px 0 6px' }}>{e.title}</h3>
                    <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5, marginBottom: 12 }}>{e.description}</p>
                    <p style={{ fontSize: 13.5, color: 'var(--color-ink-soft)', display: 'flex', alignItems: 'center', gap: 4, marginBottom: tab === 'upcoming' ? 14 : 0 }}>
                      <MapPin size={13} /> {e.location}
                    </p>
                    {tab === 'upcoming' && (
                      e.registrationUrl?.startsWith('/') ? (
                        <Link to={e.registrationUrl} className="btn btn-outline" style={{ padding: '8px 18px', fontSize: 14 }}>
                          Register
                        </Link>
                      ) : (
                        <a href={e.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: 14 }}>
                          Register
                        </a>
                      )
                    )}
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

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={active ? 'btn btn-primary' : 'btn btn-outline'}
      style={{ padding: '9px 22px' }}
    >
      {children}
    </button>
  )
}
