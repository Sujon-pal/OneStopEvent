const cols = [
  ['Events', ['Wedding', 'Holud', 'Birthday', 'Puja', 'Corporate']],
  ['Contact', ['+880 1XXX-XXXXXX', 'hello@onestopevent.example', 'Every day, 9 am to 9 pm']],
]

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            OneStop <span className="text-accent">Event</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/75">Plan your entire event in one place.</p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <h3 className="font-semibold">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} OneStop Event. All rights reserved.
      </p>
    </footer>
  )
}