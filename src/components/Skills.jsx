import { site } from "../content"
import Industries from "./Industries"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 scroll-mt-24 border-y border-line bg-surface bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(16,16,18,0.92)_16%,#101012_50%,rgba(16,16,18,0.92)_84%,rgba(176,198,255,0.06))]">
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute top-20 bottom-20 left-1/2 hidden w-px -translate-x-1/2 bg-line sm:top-28 sm:bottom-28 md:block" />
        <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-0">
          <div className="md:pr-16">
            <Reveal>
              <SectionHeading index="02" title="Stack" />
            </Reveal>
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.skills.map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={Math.min(index * 35, 320)}
                  className="rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-canvas px-3 py-1.5 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/35 hover:text-white"
                >
                  {item}
                </Reveal>
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
