import portrait from "../assets/portrait.png"
import { site } from "../content"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[46rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 pb-10 sm:pt-24 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16">
        <div>
          <h1 className="text-5xl font-extrabold tracking-[-0.055em] text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 bg-gradient-to-b from-white to-white/40 bg-clip-text font-display text-2xl font-bold tracking-[-0.04em] text-transparent sm:text-4xl">
            {site.title}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {site.links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/45">
                    {link.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={portrait}
          alt={site.name}
          className="w-full max-w-[300px] rounded-3xl border border-white/10 object-cover md:justify-self-end"
        />
      </div>
    </section>
  )
}
