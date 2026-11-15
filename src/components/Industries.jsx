import { site } from "../content"
import SectionHeading from "./SectionHeading"

export default function Industries() {
  return (
    <div id="industries">
      <SectionHeading index="03" title="Industries" />
      <ul className="mt-8 flex flex-wrap gap-2">
        {site.industries.map((industry) => (
          <li key={industry.name}>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-canvas px-4 py-2 text-sm">
              {industry.name}
              <span className="mx-2 text-white/40">·</span>
              <span className="text-white/70">{industry.count}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
