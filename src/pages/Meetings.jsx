import { useState, useEffect } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import FormStatus from '../components/FormStatus'
import { fetchRows, fetchCountsMap, submitToTable, isSupabaseConfigured, supabase } from '../lib/supabaseClient'
import { meetingsPlaceholder } from '../data/siteData'
import { Video, Calendar, Users, Clock, Link2, ChevronDown } from 'lucide-react'

function formatDateTime(iso) {
  try {
    return new Date(iso).toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit',
    })
  } catch {
    return iso
  }
}

export default function Meetings() {
  const [meetings, setMeetings] = useState(meetingsPlaceholder)
  const [loaded, setLoaded] = useState(!isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false
    async function load() {
      const [rows, counts] = await Promise.all([
        fetchRows('meetings', { eq: { is_past: false }, orderBy: 'scheduled_at', ascending: true }),
        fetchCountsMap('meeting_registration_counts', 'meeting_id', 'registration_count'),
      ])
      if (cancelled) return
      setMeetings(rows.map((m) => ({ ...m, registration_count: counts[m.id] || 0 })))
      setLoaded(true)
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <>
      <PageHero
        eyebrow={<><Video size={14} /> Online Sessions</>}
        title="Join us, wherever you are"
        subtitle="Live sessions on careers, skills, and student life — register below and we'll share the join link."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          {!loaded ? (
            <p style={{ textAlign: 'center', color: 'var(--color-ink-soft)' }}>Loading sessions…</p>
          ) : meetings.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--color-ink-soft)' }}>No sessions scheduled right now — check back soon.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {meetings.map((m, i) => (
                <Reveal key={m.id} delay={i * 0.06}>
                  <MeetingCard meeting={m} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function MeetingCard({ meeting }) {
  const [open, setOpen] = useState(false)
  const capacity = meeting.capacity
  const registered = meeting.registration_count || 0
  const isFull = capacity != null && registered >= capacity
  const spotsLeft = capacity != null ? Math.max(capacity - registered, 0) : null

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: 26 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
          <div>
            <span className="badge badge-blue">{meeting.platform || 'Zoom'}</span>
            <h3 style={{ fontSize: 20, margin: '12px 0 6px' }}>{meeting.title}</h3>
            <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5, marginBottom: 10 }}>{meeting.description}</p>
          </div>
          {capacity != null && (
            <span className={`badge ${isFull ? 'badge-orange' : 'badge-green'}`} style={{ flexShrink: 0 }}>
              {isFull ? 'Session Full' : `${spotsLeft} of ${capacity} spots left`}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 13.5, color: 'var(--color-ink-soft)', marginTop: 8 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={14} /> {formatDateTime(meeting.scheduled_at)}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Clock size={14} /> {meeting.duration_minutes || 60} min</span>
          {capacity != null && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Users size={14} /> {registered}/{capacity} registered</span>}
        </div>

        {!isFull ? (
          <button
            onClick={() => setOpen((v) => !v)}
            className="btn btn-outline"
            style={{ marginTop: 16, padding: '9px 18px', fontSize: 14 }}
          >
            {open ? 'Close' : 'Register'} <ChevronDown size={15} style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
          </button>
        ) : (
          <button className="btn btn-outline" disabled style={{ marginTop: 16, padding: '9px 18px', fontSize: 14, opacity: 0.6, cursor: 'not-allowed' }}>
            Slots Full
          </button>
        )}
      </div>

      {open && !isFull && <RegistrationForm meeting={meeting} />}
    </div>
  )
}

const initialForm = { full_name: '', email: '', phone: '', college: '' }

function RegistrationForm({ meeting }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [joinUrl, setJoinUrl] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    if (isSupabaseConfigured && meeting.capacity != null) {
      const { count } = await supabase
        .from('meeting_registrations')
        .select('id', { count: 'exact', head: true })
        .eq('meeting_id', meeting.id)
      if ((count || 0) >= meeting.capacity) {
        setLoading(false)
        setStatus('This session just filled up — no more spots available.')
        return
      }
    }

    const { error } = await submitToTable('meeting_registrations', { ...form, meeting_id: meeting.id })
    setLoading(false)
    if (error) {
      setStatus(error)
    } else {
      setStatus('success')
      setForm(initialForm)
      setJoinUrl(meeting.join_url || null)
    }
  }

  return (
    <div style={{ borderTop: '2.5px solid var(--color-ink)', padding: 26, background: 'var(--color-bg-alt)' }}>
      <form onSubmit={handleSubmit}>
        <FormStatus
          status={status}
          successMessage={joinUrl ? 'You\'re registered!' : 'You\'re registered! The join link will be shared with you closer to the session.'}
        />
        {status === 'success' && joinUrl && (
          <a href={joinUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginBottom: 18 }}>
            <Link2 size={16} /> Join the session
          </a>
        )}
        <div className="grid grid-2">
          <div className="form-field">
            <label htmlFor={`name-${meeting.id}`}>Full name</label>
            <input id={`name-${meeting.id}`} name="full_name" required value={form.full_name} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor={`email-${meeting.id}`}>Email</label>
            <input id={`email-${meeting.id}`} type="email" name="email" required value={form.email} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-2">
          <div className="form-field">
            <label htmlFor={`phone-${meeting.id}`}>Phone</label>
            <input id={`phone-${meeting.id}`} name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor={`college-${meeting.id}`}>College</label>
            <input id={`college-${meeting.id}`} name="college" value={form.college} onChange={handleChange} />
          </div>
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Registering…' : 'Confirm Registration'}
        </button>
      </form>
    </div>
  )
}
