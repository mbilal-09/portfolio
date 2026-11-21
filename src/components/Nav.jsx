import { useLayoutEffect, useRef, useSyncExternalStore } from "react"

const links = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

// A nav click holds its section until the scroll settles, so the pill slides straight there
// instead of stepping through every section the page scrolls past.
let clicked = ""

function hold(id) {
  clicked = id
}

function subscribe(onChange) {
  const settle = () => {
    clicked = ""
    onChange()
  }
  window.addEventListener("scroll", onChange, { passive: true })
  window.addEventListener("scrollend", settle)
  window.addEventListener("resize", onChange)
  return () => {
    window.removeEventListener("scroll", onChange)
    window.removeEventListener("scrollend", settle)
    window.removeEventListener("resize", onChange)
  }
}

function activeSection() {
  const inView = sectionInView()
  if (inView === clicked) clicked = ""
  return clicked || inView
}

function sectionInView() {
  const sections = links.map((link) => document.getElementById(link.id))
  // The nav renders before the sections are in the DOM.
  if (!sections.every(Boolean)) return ""
  // Contact is too short to reach the reading line, so the page bottom selects it.
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    return sections.at(-1).id
  }
  return sections.findLast((section) => section.getBoundingClientRect().top <= window.innerHeight / 3)?.id ?? ""
}

export default function Nav() {
  const active = useSyncExternalStore(subscribe, activeSection)
  const nav = useRef(null)
  const pill = useRef(null)

  useLayoutEffect(() => {
    // With no section active the pill waits on the first link, so it fades in there instead of sliding in.
    const link = nav.current.querySelector(`[href="#${active || links[0].id}"]`)
    const place = () => {
      pill.current.style.width = `${link.offsetWidth}px`
      pill.current.style.translate = `${link.offsetLeft}px`
    }
    place()
    // Font swap and the sm breakpoint move the links without changing `active`.
    const observer = new ResizeObserver(place)
    observer.observe(nav.current)
    return () => observer.disconnect()
  }, [active])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        ref={nav}
        aria-label="Sections"
        className="pointer-events-auto relative flex items-center gap-1 rounded-full border border-white/10 bg-surface/70 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150"
      >
        <a
          href="#top"
          aria-label="Back to top"
          className="hidden size-8 shrink-0 place-items-center rounded-full bg-gradient-to-b from-white to-zinc-300 font-display text-[11px] font-extrabold tracking-[-0.04em] text-black transition duration-300 ease-out hover:opacity-80 sm:grid"
        >
          MB
        </a>
        <span
          ref={pill}
          aria-hidden="true"
          className={`absolute inset-y-1 left-0 rounded-full border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-[translate,width,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            active ? "" : "opacity-0"
          }`}
        />
        <ul className="flex items-center">
          {links.map((link) => {
            const current = link.id === active
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={current ? "true" : undefined}
                  onClick={() => hold(link.id)}
                  className={`relative inline-flex rounded-full px-3 py-1.5 text-[13px] font-medium transition duration-300 ease-out ${
                    current ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
