import { useEffect, useState } from "react"
import portrait from "../assets/portrait.png"
import { site } from "../content"
import Reveal from "./Reveal"

function Tagline() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [from, to] = site.tagline[index]

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % site.tagline.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <button
      type="button"
      aria-label="Cycle tagline"
      onClick={() => setIndex((i) => (i + 1) % site.tagline.length)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="tagline group mt-5 inline-flex max-w-full flex-wrap items-baseline gap-x-2 text-left text-2xl font-bold tracking-[-0.04em] text-white/90 sm:text-3xl"
    >
      <span className="text-white/55">I ship</span>
      <span key={`from-${from}`} className="tagline-word text-white">
        {from}
      </span>
      <span className="text-white/55">into</span>
      <span key={`to-${to}`} className="tagline-word text-white">
        {to}
      </span>
      <span className="text-white/55">.</span>
      <span
        aria-hidden="true"
        className="ml-1 text-xs font-medium tracking-normal text-white/35 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        click
      </span>
    </button>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-24">
      <div className="hero-wash pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),rgba(176,198,255,0.04)_42%,transparent_70%)] blur-3xl" />
      <div className="orb-drift pointer-events-none absolute top-16 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.1),transparent_68%)] blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-24 pb-10 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16">
        <div>
          <Reveal as="h1" lift="blur" className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text py-[0.08em] text-5xl leading-[1.1] font-extrabold tracking-[-0.055em] text-transparent sm:text-6xl">
            {site.name}
          </Reveal>
          <Reveal
            as="p"
            delay={70}
            className="mt-3 bg-gradient-to-b from-white to-white/40 bg-clip-text py-[0.06em] font-display text-lg leading-snug font-bold tracking-[-0.04em] text-transparent sm:text-2xl"
          >
            {site.title}
          </Reveal>
          <Reveal as="p" delay={100} className="mt-3 text-sm font-semibold text-white/70">
            {site.location} · {site.availability}
          </Reveal>
          <Reveal delay={130}>
            <Tagline />
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            {site.about.map((paragraph, index) => (
              <Reveal as="p" key={paragraph} delay={180 + index * 70}>
                {paragraph}
              </Reveal>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {site.links.map((link, index) => (
              <Reveal as="li" key={link.label} delay={300 + index * 55}>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/45">
                    {link.label}
                  </span>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal
          as="img"
          lift="image"
          delay={120}
          src={portrait}
          alt={site.name}
          className="w-full max-w-[300px] rounded-3xl border border-white/10 object-cover shadow-[0_0_48px_rgba(255,255,255,0.06)] md:justify-self-end"
        />
      </div>
    </section>
  )
}
