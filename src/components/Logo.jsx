/** SS monogram badge used in the Navbar and Footer. Swap for a real logo image whenever one's ready. */
export default function Logo({ size = 38, light = false }) {
  return (
    <span
      style={{
        display: 'grid',
        placeItems: 'center',
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.32),
        background: light ? 'rgba(255,255,255,0.15)' : 'var(--gradient-primary)',
        color: '#fff',
        boxShadow: light ? 'none' : 'var(--shadow-glow-primary)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 800,
        fontSize: Math.round(size * 0.42),
        letterSpacing: '-0.02em',
        flexShrink: 0,
      }}
    >
      SS
    </span>
  )
}
