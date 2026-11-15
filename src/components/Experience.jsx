import { site } from "../content"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

const months = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  June: 5,
  Jul: 6,
  July: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
}

function durationFor(period) {
  const match = period.match(/^([A-Za-z]+)\s+(\d{4})\s+—\s+(?:([A-Za-z]+)\s+(\d{4})|Present)$/)
  if (!match || months[match[1]] === undefined) return ""
  const start = new Date(Number(match[2]), months[match[1]], 1)
  const end =
    match[3] && months[match[3]] !== undefined
      ? new Date(Number(match[4]), months[match[3]], 1)
      : new Date()
  const total =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1
  const monthsCount = Math.max(total, 1)
  const years = Math.floor(monthsCount / 12)
  const rest = monthsCount % 12
  return [
    years ? `${years} ${years === 1 ? "year" : "years"}` : "",
    rest ? `${rest} ${rest === 1 ? "month" : "months"}` : "",
  ]
    .filter(Boolean)
    .join(" ")
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading index="01" title="Experience" />
      </Reveal>
      <ol className="mt-10">
        {site.experience.map((item, index) => (
          <li
            key={item.period + item.role}
            className="group -mx-4 border-b border-line px-4 py-8 transition-all duration-500 ease-out last:border-b-0 hover:rounded-2xl hover:border-transparent hover:bg-white/[0.045] [&:has(+li:hover)]:border-transparent"
          >
            <Reveal
              delay={Math.min(index * 90, 280)}
              className="grid gap-2 sm:grid-cols-12 sm:gap-6"
            >
            <div className="sm:col-span-3">
              <p className="text-sm text-white/70 transition duration-500 group-hover:text-white">
                {item.period}
              </p>
              <p className="mt-1 text-sm text-white/45 transition duration-500 group-hover:text-white/70">
                {durationFor(item.period)}
              </p>
            </div>
            <div className="sm:col-span-9">
              <h3 className="text-xl transition duration-500 group-hover:text-white">{item.role}</h3>
              {item.place ? (
                <p className="mt-1 text-muted transition duration-500 group-hover:text-cream">{item.place}</p>
              ) : null}
              {item.detail.length ? (
                <div className="mt-3 max-w-xl space-y-2 text-sm leading-relaxed text-muted transition duration-500 group-hover:text-cream/90">
                  {item.detail.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : null}
              <ul className="tech-pills mt-3 flex max-w-xl flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/70 transition duration-500 group-hover:text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex justify-end">
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black"
        >
          View resume
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-3.5 w-3.5 -rotate-45 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>
  )
}
