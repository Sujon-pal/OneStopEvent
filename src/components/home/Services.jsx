import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading title="Every service for your event, in one place">
        From decoration to the priest, from food to the venue. Tap any service to see the kind of work we do.
      </SectionHeading>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <button
            key={s.name}
            type="button"
            className="card items-stretch rounded-2xl border border-base-300 bg-base-100 p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-base-200 text-2xl" aria-hidden="true">
                {s.icon}
              </span>
              <span className="badge badge-soft badge-primary font-semibold">{s.count} services</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.name}</h3>
            <p className="mt-1 text-sm text-base-content/60">{s.desc}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <li key={t} className="badge badge-outline badge-sm">{t}</li>
              ))}
              <li className="px-1 text-xs text-base-content/60">+{s.count - s.tags.length} more</li>
            </ul>
            <span className="mt-5 text-sm font-semibold text-primary">See our work</span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="font-display text-xl font-semibold">Want more than one service?</h3>
          <p className="mt-1 text-sm text-base-content/60">
            Add them all to one plan, see the total as you go, and book once. We call you to confirm.
          </p>
        </div>
        <a href="#top" className="btn btn-accent shrink-0 rounded-full">Start planning my event</a>
      </div>
    </Section>
  )
}