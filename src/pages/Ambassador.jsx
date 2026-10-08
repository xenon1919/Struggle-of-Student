import { useState } from 'react'
import PageHero from '../components/PageHero'
import FormStatus from '../components/FormStatus'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { submitToTable } from '../lib/supabaseClient'
import { Users, Award, Megaphone, Handshake } from 'lucide-react'

const initialForm = { full_name: '', email: '', phone: '', college: '', city: '', social_handle: '', why_join: '' }

const perks = [
  { icon: Award, title: 'Certificates & Recognition', text: 'Official certificates and shout-outs for your leadership work.' },
  { icon: Megaphone, title: 'Lead on Your Campus', text: 'Host local meetups, drives, and sessions as our campus face.' },
  { icon: Handshake, title: 'Network & Mentorship', text: 'Direct access to our team, partner orgs, and fellow ambassadors.' },
]

export default function Ambassador() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const { error } = await submitToTable('ambassador_applications', form)
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
        eyebrow={<><Users size={14} /> Campus Ambassador Program</>}
        title="Lead the community on your campus"
        subtitle="Be the bridge between Struggle of Student and your college — host events, share opportunities, and grow as a leader."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <ImagePlaceholder
              src="/images/ambassador-team.webp"
              alt="Campus Ambassador team posing together on campus steps"
              label="Ambassador team photo"
              icon={Users}
              variant="purple"
              ratio="7 / 2"
              style={{ marginBottom: 48, border: '2.5px solid var(--color-ink)', boxShadow: '7px 7px 0 var(--color-ink)' }}
            />
          </Reveal>
          <div className="grid grid-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card card-hover" style={{ textAlign: 'center', '--tilt': i % 2 === 0 ? '-1.5deg' : '1.5deg' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, margin: '0 auto 16px',
                    background: 'var(--color-primary-soft)', display: 'grid', placeItems: 'center',
                  }}>
                    <p.icon size={24} color="var(--color-primary-dark)" />
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5 }}>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 580 }}>
          <Reveal>
          <div className="section-head">
            <h2 className="section-title">Apply to become an Ambassador</h2>
            <p className="section-subtitle">Takes under two minutes. We review applications on a rolling basis.</p>
          </div>
          <form className="card" onSubmit={handleSubmit}>
            <FormStatus status={status} successMessage="Application received! We'll reach out over email soon." />
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
                <label htmlFor="city">City</label>
                <input id="city" name="city" value={form.city} onChange={handleChange} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="college">College / University</label>
              <input id="college" name="college" required value={form.college} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="social_handle">Instagram / LinkedIn handle</label>
              <input id="social_handle" name="social_handle" value={form.social_handle} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="why_join">Why do you want to be an Ambassador?</label>
              <textarea id="why_join" name="why_join" value={form.why_join} onChange={handleChange} />
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
