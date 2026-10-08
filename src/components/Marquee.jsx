const defaultItems = [
  '✨ Opportunities',
  '🎤 Open Mics',
  '🤝 Volunteer',
  '🎓 Scholarships',
  '📸 Talent Showcase',
  '🚀 Campus Ambassadors',
  '📅 Events',
]

export default function Marquee({ items = defaultItems }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-chip" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
