/** Brand logo mark used in the Navbar and Footer. */
export default function Logo({ size = 38, light = false }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Struggle of Student logo"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.32),
        boxShadow: light ? 'none' : 'var(--shadow-glow-primary)',
        objectFit: 'cover',
        flexShrink: 0,
      }}
    />
  )
}
