export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">{children}</div>
    </section>
  )
}