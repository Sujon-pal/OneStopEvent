export default function SectionHeading({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-semibold">{title}</h2>
      <span className="mt-3 block h-[3px] w-12 rounded bg-linear-to-r from-accent to-secondary" />
      {children && <p className="mt-3 max-w-2xl text-base-content/60">{children}</p>}
    </div>
  )
}