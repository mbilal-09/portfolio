import { site } from "../content"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(186,210,255,0.16),transparent_68%)] blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading index="05" title="Contact" />
        </Reveal>
        <Reveal
          as="h2"
          lift="blur"
          delay={90}
          className="mt-6 max-w-3xl bg-gradient-to-br from-white via-white to-white/40 bg-clip-text pr-[0.08em] text-[clamp(2rem,7.5vw,5.5rem)] leading-[1.08] font-extrabold tracking-[-0.05em] text-transparent"
        >
          Open to full-time.
          <br />
          Say hello.
        </Reveal>
        <Reveal
          as="a"
          delay={160}
          href={`mailto:${site.email}`}
          className="relative mt-10 inline-flex rounded-full border border-white bg-gradient-to-r from-white to-zinc-200 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(186,210,255,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-none hover:text-white hover:shadow-[0_0_32px_rgba(255,255,255,0.16)]"
        >
          Email me
        </Reveal>
      </div>
    </section>
  )
}
