import { useEffect, useState } from 'react'

/** Counts up from 0 to the numeric part of `value` (e.g. "2,000+") on mount. */
export default function AnimatedCounter({ value, duration = 1100 }) {
  const target = parseInt(String(value).replace(/\D/g, ''), 10) || 0
  const suffix = String(value).replace(/[0-9,]/g, '')
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start
    let raf
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return <>{display.toLocaleString('en-US')}{suffix}</>
}
