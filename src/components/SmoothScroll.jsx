import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (motion.matches) return

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
    })

    return () => lenis.destroy()
  }, [])

  return null
}
