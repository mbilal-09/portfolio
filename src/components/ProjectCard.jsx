const frames = [
  "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_58%)]",
  "bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1),transparent_55%)]",
  "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_62%)]",
]

export default function ProjectCard({ item, featured, frame, compact }) {
  return (
    <article className={`min-w-0 ${featured ? "md:col-span-2" : ""}`}>
      <div
        className={`relative overflow-hidden rounded-3xl border border-white/10 bg-surface ${
          featured ? "aspect-[16/8]" : "aspect-[4/3]"
        }`}
      >
        <div className={`absolute inset-0 ${frames[frame % frames.length]}`} />
        <p
          className={`absolute bottom-4 left-5 tracking-[0.16em] text-white/70 uppercase ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {item.index}
        </p>
      </div>
      <h3
        className={`mt-4 font-bold tracking-[-0.04em] ${
          compact ? "text-xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{item.meta}</p>
      <p
        className={`mt-3 leading-relaxed text-cream/80 ${
          compact ? "line-clamp-3 text-sm" : "max-w-xl text-base"
        }`}
      >
        {item.summary}
      </p>
      {item.role ? <p className="mt-3 text-sm text-white/70">{item.role}</p> : null}
      {item.links?.length ? (
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
      ) : null}
    </article>
  )
}
