import { motion } from 'framer-motion'

/**
 * Animates in once on mount (not scroll-triggered) — IntersectionObserver-based
 * reveal left most of the page blank in full-page screenshots and risked the
 * same for real users on fast scroll / slow JS, since content below the fold
 * never "entered" the viewport in some capture/render paths. A capped delay
 * keeps staggered lists from taking forever to finish appearing.
 */
export default function Reveal({ children, delay = 0, y = 16, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(delay, 0.4), ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
