import { useEffect, useRef } from "react"

export default function Reveal({ as: Tag = "div", className = "", delay = 0, lift = "up", children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-in")
      return
    }

    const show = () => node.classList.add("is-in")
    const rect = node.getBoundingClientRect()
    const visible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0
    if (visible) {
      // Already on screen — don't wait a frame of opacity:0.
      requestAnimationFrame(show)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      {...rest}
      className={`reveal ${className}`}
      data-lift={lift}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
