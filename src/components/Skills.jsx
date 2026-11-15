import { site } from "../content"
import Industries from "./Industries"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface">
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute top-20 bottom-20 left-1/2 hidden w-px -translate-x-1/2 bg-line sm:top-28 sm:bottom-28 md:block" />
        <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-0">
          <div className="md:pr-16">
            <SectionHeading index="02" title="Stack" />
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.skills.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-canvas px-3 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-line pt-16 md:border-t-0 md:pt-0 md:pl-16">
            <Industries />
          </div>
        </div>
      </div>
    </section>
  )
}
