import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FormStatus from '../components/FormStatus'
import Reveal from '../components/Reveal'
import { submitToTable, isSupabaseConfigured, supabase } from '../lib/supabaseClient'
import { upcomingEvents } from '../data/siteData'
import { HeartHandshake } from 'lucide-react'

const initialForm = { full_name: '', email: '', phone: '', college: '', year_of_study: '', interest_area: '', message: '' }

export default function Volunteer() {
  const [searchParams] = useSearchParams()
  const eventId = searchParams.get('event')
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [event, setEvent] = useState(null)

  useEffect(() => {
    if (!eventId) return
    if (isSupabaseConfigured) {
      supabase.from('events').select('*').eq('id', eventId).maybeSingle().then(({ data }) => {
        if (data) setEvent({ id: data.id, title: data.title, capacity: data.volunteer_capacity })
      })
    } else {
      const fallback = upcomingEvents.find((e) => String(e.id) === eventId)
      if (fallback) setEvent({ id: fallback.id, title: fallback.title, capacity: fallback.volunteerCapacity })
    }
  }, [eventId])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    if (isSupabaseConfigured && event?.capacity != null) {
      const { count } = await supabase
        .from('volunteer_applications')
        .select('id', { count: 'exact', head: true })
        .eq('event_id', event.id)
      if ((count || 0) >= event.capacity) {
        setLoading(false)
        setStatus('These volunteer slots just filled up — thanks for your interest! Check the Events page for other openings.')
        return
      }
    }

    const payload = event ? { ...form, event_id: event.id } : form
    const { error } = await submitToTable('volunteer_applications', payload)
    setLoading(false)
    if (error) {
      setStatus(error)
    } else {
      setStatus('success')
      setForm(initialForm)
    }
  }

  return (
    <>
      <PageHero
        eyebrow={<><HeartHandshake size={14} /> Volunteer</>}
        title={event ? `Volunteer for ${event.title}` : 'Give an hour, change someone\'s week'}
        subtitle="Help run events, mentor peers, or support outreach — no experience needed, just willingness to show up."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 580 }}>
          <Reveal>
          <form className="card" onSubmit={handleSubmit}>
            <FormStatus status={status} successMessage="Thank you for stepping up! We'll be in touch soon." />
            {event && (
              <div className="badge badge-blue" style={{ marginBottom: 20 }}>Applying for: {event.title}</div>
            )}
            <div className="grid grid-2">
              <div className="form-field">
                <label htmlFor="full_name">Full name</label>
                <input id="full_name" name="full_name" required value={form.full_name} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-2">
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="year_of_study">Year of study</label>
                <input id="year_of_study" name="year_of_study" placeholder="e.g. 2nd year" value={form.year_of_study} onChange={handleChange} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="college">College / University</label>
              <input id="college" name="college" required value={form.college} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="interest_area">What would you like to help with?</label>
              <select id="interest_area" name="interest_area" value={form.interest_area} onChange={handleChange}>
                <option value="">Select an area</option>
                <option>Event Management</option>
                <option>Content & Social Media</option>
                <option>Mentorship</option>
                <option>Outreach & Partnerships</option>
                <option>Design</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="message">Anything you'd like us to know?</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
