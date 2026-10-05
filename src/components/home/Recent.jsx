import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { recent } from '../../data/recent'

export default function Recent() {
  return (
    <Section id="recent" className="bg-[#fff6e5] dark:bg-[#241a18]">
      <SectionHeading title="Recent events">
        Events we have completed lately. Tap one to see what we did and how it looked.
      </SectionHeading>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {recent.map((r) => (
          <button
            key={r.title}
            type="button"
            className="card overflow-hidden rounded-2xl border border-base-300 bg-base-100 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className={`relative flex aspect-[16/10] w-full items-center justify-center bg-linear-to-br text-6xl ${r.tone}`}>
              <span aria-hidden="true">{r.icon}</span>
              <span className="badge badge-success absolute left-3 top-3 font-semibold text-white">✓ Completed</span>
              <span className="badge absolute right-3 top-3 border-0 bg-white/90 font-semibold text-amber-950">{r.event}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-base-content/60">{r.place}, {r.date}</p>
              <span className="badge badge-soft badge-primary mt-3 font-semibold">{r.guests} guests</span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {r.done.slice(0, 2).map((d) => (
                  <li key={d} className="badge badge-outline badge-sm">{d}</li>
                ))}
                <li className="px-1 text-xs text-base-content/60">+{r.done.length - 2} more</li>
              </ul>
              <span className="mt-4 block text-sm font-semibold text-primary">See what we did</span>
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}