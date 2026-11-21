import { useEffect, useRef } from "react"

export default function GlassCursor() {
  const cursor = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)")
    if (!fine.matches) return

    const node = cursor.current
    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let scale = 1
    let current = 1
    let visible = false
    let frame = 0

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      if (!visible) {
        visible = true
        cx = x
        cy = y
        node.style.opacity = "1"
        document.documentElement.classList.add("has-glass-cursor")
      }
      const target = event.target
      const interactive =
        target instanceof Element && target.closest("a, button, .tagline")
      scale = interactive ? 2.15 : 1
      node.classList.toggle("is-clear", Boolean(interactive))
    }

    const tick = () => {
      cx += (x - cx) * 0.22
      cy += (y - cy) * 0.22
      current += (scale - current) * 0.2
      const size = 46 * current
      node.style.width = `${size}px`
      node.style.height = `${size}px`
      node.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
      document.documentElement.classList.remove("has-glass-cursor")
    }
  }, [])

  return (
    <div ref={cursor} aria-hidden="true" className="glass-cursor" />
  )
}
