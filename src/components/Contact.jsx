import { site } from "../content"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading index="05" title="Contact" />
        </Reveal>
        <Reveal
          as="h2"
          lift="blur"
          delay={90}
          className="mt-6 max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.05em]"
        >
          Let’s build something considered.
        </Reveal>
        <Reveal
          as="a"
          delay={180}
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
        >
          Contact Me
        </Reveal>
      </div>
    </section>
  )
}
