export default function Blob({ color = 'var(--color-primary-soft)', size = 320, style }) {
  return (
    <div
      className="blob"
      style={{
        width: size,
        height: size,
        background: color,
        ...style,
      }}
    />
  )
}
