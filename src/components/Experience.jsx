import { site } from "../content"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading index="01" title="Experience" />
      <ol className="mt-10">
        {site.experience.map((item) => (
          <li
            key={item.period + item.place}
            className="group -mx-4 grid gap-2 border-b border-line px-4 py-8 transition-all duration-500 ease-out last:border-b-0 hover:rounded-2xl hover:border-transparent hover:bg-white/[0.045] [&:has(+li:hover)]:border-transparent sm:grid-cols-12 sm:gap-6"
          >
            <p className="text-sm text-white/70 transition duration-500 group-hover:text-white sm:col-span-3">
              {item.period}
            </p>
            <div className="sm:col-span-9">
              <h3 className="text-xl transition duration-500 group-hover:text-white">{item.role}</h3>
              <p className="mt-1 text-muted transition duration-500 group-hover:text-cream">{item.place}</p>
              <div className="mt-3 max-w-xl space-y-2 text-sm leading-relaxed text-muted transition duration-500 group-hover:text-cream/90">
                {item.detail.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex justify-end">
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black"
        >
          View resume
        </a>
      </div>
    </section>
  )
}
