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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.classList.add("is-in")
        observer.disconnect()
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
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
