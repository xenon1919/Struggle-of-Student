import { useState } from 'react'
import PageHero from '../components/PageHero'
import FormStatus from '../components/FormStatus'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { talents } from '../data/siteData'
import { submitToTable } from '../lib/supabaseClient'
import { Sparkles } from 'lucide-react'

const initialForm = { full_name: '', email: '', talent_category: '', description: '', link_url: '' }

export default function Talent() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const { error } = await submitToTable('talent_submissions', form)
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
        eyebrow={<><Sparkles size={14} /> Talent Showcase</>}
        title="Students doing remarkable things"
        subtitle="Art, code, music, writing, sport — if you made it, we want to see it."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {talents.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <div className={`card card-hover card-${t.variant}`} style={{ textAlign: 'center', padding: 20, '--tilt': i % 2 === 0 ? '-2deg' : '2deg' }}>
                  <ImagePlaceholder src={t.image} alt={t.name} label={t.name} icon={Sparkles} variant={t.variant} ratio="1 / 1" style={{ marginBottom: 16 }} />
                  <h3 style={{ fontSize: 18 }}>{t.name}</h3>
                  <span className="badge badge-blue" style={{ margin: '10px 0' }}>{t.skill}</span>
                  <p style={{ color: 'var(--color-ink-soft)', fontSize: 14.5 }}>{t.achievement}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="section-head">
            <h2 className="section-title">Share your talent</h2>
            <p className="section-subtitle">Tell us what you do — we'll feature select submissions on the site and socials.</p>
          </div>
          <form className="card" onSubmit={handleSubmit}>
            <FormStatus status={status} successMessage="Thanks for sharing! We'll be in touch if we feature your work." />
            <div className="form-field">
              <label htmlFor="full_name">Full name</label>
              <input id="full_name" name="full_name" required value={form.full_name} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="talent_category">Talent category</label>
              <input id="talent_category" name="talent_category" placeholder="e.g. Music, Design, Writing" value={form.talent_category} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="description">Tell us about it</label>
              <textarea id="description" name="description" value={form.description} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="link_url">Link to your work (optional)</label>
              <input id="link_url" name="link_url" placeholder="https://" value={form.link_url} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
