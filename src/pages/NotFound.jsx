import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <h1 className="section-title">Page not found</h1>
        <p className="section-subtitle" style={{ marginBottom: 24 }}>Looks like this page wandered off. Let's get you back.</p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>Back to Home</Link>
      </div>
    </section>
  )
}
