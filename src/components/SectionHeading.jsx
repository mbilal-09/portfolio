export default function SectionHeading({ index, title }) {
  return (
    <h2 className="inline-flex rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium tracking-[0.16em] text-white/80 uppercase">
      {title}
      {index ? (
        <>
          <span className="mx-2 text-white/40">·</span>
          {index}
        </>
      ) : null}
    </h2>
  )
}
