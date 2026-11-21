import { site } from "../content"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Industries() {
  return (
    <div id="industries">
      <Reveal>
        <SectionHeading index="03" title="Industries" />
      </Reveal>
      <ul className="mt-8 flex flex-wrap gap-2">
        {site.industries.map((industry, index) => (
          <Reveal as="li" key={industry.name} delay={80 + index * 70}>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-canvas px-4 py-2 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/35">
              {industry.name}
              <span className="mx-2 text-white/40">·</span>
              <span className="text-white/70">{String(industry.count).padStart(2, "0")}</span>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
