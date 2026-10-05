export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">{children}</div>
    </section>
  )
}