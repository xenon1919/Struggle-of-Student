import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Opportunities from './pages/Opportunities'
import Talent from './pages/Talent'
import Careers from './pages/Careers'
import Ambassador from './pages/Ambassador'
import Events from './pages/Events'
import Meetings from './pages/Meetings'
import Volunteer from './pages/Volunteer'
import Join from './pages/Join'
import Team from './pages/Team'
import Placements from './pages/Placements'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/events" element={<Events />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/join" element={<Join />} />
          <Route path="/team" element={<Team />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
