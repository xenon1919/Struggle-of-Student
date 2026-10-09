import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { pastEvents, upcomingEvents } from '../data/siteData'
import { fetchRows, fetchCountsMap, isSupabaseConfigured } from '../lib/supabaseClient'
import { CalendarHeart, MapPin, Users } from 'lucide-react'

export default function Events() {
  const [tab, setTab] = useState('upcoming')
  const [upcoming, setUpcoming] = useState(upcomingEvents)
  const [past, setPast] = useState(pastEvents)

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false
    async function load() {
      const [upcomingRows, pastRows, counts] = await Promise.all([
        fetchRows('events', { eq: { is_past: false }, orderBy: 'event_date', ascending: true }),
        fetchRows('events', { eq: { is_past: true }, orderBy: 'event_date', ascending: false }),
        fetchCountsMap('event_volunteer_counts', 'event_id', 'applicant_count'),
      ])
      if (cancelled) return
      if (upcomingRows.length) {
        setUpcoming(upcomingRows.map((e) => ({
          ...e,
          title: e.title,
          date: e.event_date,
          location: e.location,
          description: e.description,
          image: e.image_url,
          registrationUrl: e.registration_url,
          volunteerCapacity: e.volunteer_capacity,
          volunteerCount: counts[e.id] || 0,
        })))
      }
      if (pastRows.length) {
        setPast(pastRows.map((e) => ({ ...e, title: e.title, date: e.event_date, location: e.location, description: e.description, image: e.image_url })))
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const list = tab === 'upcoming' ? upcoming : past

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
            {list.map((e, i) => {
              const hasCapacity = tab === 'upcoming' && e.volunteerCapacity != null
              const isFull = hasCapacity && e.volunteerCount >= e.volunteerCapacity
              const spotsLeft = hasCapacity ? Math.max(e.volunteerCapacity - e.volunteerCount, 0) : null

              return (
                <Reveal key={e.id} delay={i * 0.06}>
                  <div className={`card card-hover card-${e.variant || 'green'}`} style={{ padding: 0, overflow: 'hidden', '--tilt': i % 2 === 0 ? '-1deg' : '1deg' }}>
                    <ImagePlaceholder src={e.image} alt={e.title} label={e.title} icon={CalendarHeart} variant={e.variant || 'green'} ratio="16 / 8" radius="0" style={{ border: 'none', borderBottom: '2.5px solid var(--color-ink)' }} />
                    <div style={{ padding: 24 }}>
                      <span className="badge badge-orange">{e.date}</span>
                      <h3 style={{ fontSize: 19, margin: '14px 0 6px' }}>{e.title}</h3>
                      <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5, marginBottom: 12 }}>{e.description}</p>
                      <p style={{ fontSize: 13.5, color: 'var(--color-ink-soft)', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14 }}>
                        <MapPin size={13} /> {e.location}
                      </p>

                      {tab === 'upcoming' && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                          {e.registrationUrl?.startsWith('/') ? (
                            <Link to={e.registrationUrl} className="btn btn-outline" style={{ padding: '8px 18px', fontSize: 14 }}>
                              Register
                            </Link>
                          ) : e.registrationUrl ? (
                            <a href={e.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: 14 }}>
                              Register
                            </a>
                          ) : null}

                          {hasCapacity && (
                            isFull ? (
                              <span className="badge badge-orange">Volunteer Slots Full</span>
                            ) : (
                              <Link to={`/volunteer?event=${e.id}`} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: 14 }}>
                                <Users size={14} /> Volunteer ({spotsLeft} left)
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            })}
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
