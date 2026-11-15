import { site } from "../content"
import ProjectCard from "./ProjectCard"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Work() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <SectionHeading index="04" title="Projects" />
      </Reveal>
      <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {site.work.map((item, index) => (
          <Reveal key={item.index} delay={index * 110} className={index === 0 ? "md:col-span-2" : ""}>
            <ProjectCard item={item} featured={index === 0} frame={index} />
          </Reveal>
        ))}
      </div>
      <ul className="mt-16 border-t border-line">
        {site.more.map((item, index) => (
          <li
            key={item.title}
            className="group -mx-4 border-b border-line px-4 py-6 transition-all duration-500 ease-out last:border-b-0 hover:rounded-2xl hover:border-transparent hover:bg-white/[0.045] [&:has(+li:hover)]:border-transparent"
          >
            <Reveal delay={Math.min(index * 70, 280)} className="grid gap-3 sm:grid-cols-12 sm:gap-6">
            <div className="sm:col-span-4">
              <h3 className="text-xl transition duration-500 group-hover:text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-muted transition duration-500 group-hover:text-cream">
                {item.meta}
              </p>
            </div>
            <div className="sm:col-span-8">
              <p className="max-w-xl text-sm leading-relaxed text-cream/80 transition duration-500 group-hover:text-cream">
                {item.summary}
              </p>
              {item.role ? <p className="mt-2 text-sm text-white/70">{item.role}</p> : null}
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
