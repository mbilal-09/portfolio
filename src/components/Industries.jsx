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
            <span className="inline-flex items-center rounded-full border border-white/15 bg-canvas px-4 py-2 text-sm">
              {industry.name}
              <span className="mx-2 text-white/40">·</span>
              <span className="text-white/70">{industry.count}</span>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
