import { Image as ImageIcon } from 'lucide-react'

/**
 * Renders a real photo when `src` is given; otherwise falls back to a
 * labeled placeholder box so empty slots are still obvious during layout work.
 */
export default function ImagePlaceholder({
  src,
  alt,
  label = 'Image',
  icon: Icon = ImageIcon,
  variant = 'green',
  ratio = '4 / 3',
  objectPosition = 'center',
  radius = 'var(--radius-md)',
  style,
  className = '',
}) {
  if (src) {
    return (
      <div
        className={`ph-${variant} ${className}`}
        style={{ aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', ...style }}
      >
        <img
          src={src}
          alt={alt || label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition }}
        />
      </div>
    )
  }

  return (
    <div
      className={`img-placeholder ph-${variant} ${className}`}
      style={{ aspectRatio: ratio, borderRadius: radius, ...style }}
    >
      <span className="img-placeholder-icon">
        <Icon size={22} />
      </span>
      <span className="img-placeholder-label">{label}</span>
    </div>
  )
}
