import { useState } from 'react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { events } from '../../data/event'
import { packages, tierStyles } from '../../data/packages'
import { formatMoney } from '../../data/utils/money'

const taglines = ['The essentials, done well', 'More people, more hours', 'A full team handles everything']
const bookingSteps = ['Pick your date and place', 'We call you to confirm', 'Pay 30% to hold your date']

export default function Packages() {
  const [tab, setTab] = useState('Wedding')

  return (
    <Section id="packages" className="bg-base-200">
      <SectionHeading title="Packages for your event">
        Every package covers everything your event needs. Bigger packages bring more people, more hours
        and more extras. Packages are fixed and cannot be edited.
      </SectionHeading>

      <div role="tablist" aria-label="Event type" className="mt-6 flex flex-wrap gap-2">
        {events.map((e) => (
          <button
            key={e.name}
            role="tab"
            type="button"
            aria-selected={tab === e.name}
            onClick={() => setTab(e.name)}
            className={`btn rounded-full ${tab === e.name ? 'btn-primary' : 'border-base-300 bg-base-100'}`}
          >
            {e.icon} {e.name}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 items-start gap-5 md:grid-cols-3">
        {packages[tab].map((p, i) => {
          const popular = i === 1
          return (
            <article
              key={p.name}
              className={`card overflow-hidden rounded-2xl bg-base-100 shadow-md ${
                popular ? 'border-2 border-accent' : 'border border-base-300'
              }`}
            >
              <div className={`relative bg-linear-to-br p-6 text-white ${tierStyles[i]}`}>
                <p className="text-sm text-white/80">{tab}</p>
                {popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-800">
                    Most booked
                  </span>
                )}
                <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
                <p className="text-sm text-white/85">{taglines[i]}</p>
              </div>

              <div className="p-6">
                <span className="badge badge-soft badge-primary font-semibold">Up to {p.guests} guests</span>
                <p className="mt-4 text-3xl font-bold">{formatMoney(p.price)}</p>
                <p className="text-xs text-base-content/60">Fixed price</p>
                <button type="button" className={`btn mt-5 w-full rounded-full ${popular ? 'btn-accent' : 'btn-primary'}`}>
                  Book this package
                </button>
                <ul className="mt-6 space-y-3 border-t border-base-300 pt-5 text-sm">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-success" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>

      <ol className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
        {bookingSteps.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-base-content/60">
        Food and catering are not part of any package. Want something different?{' '}
        <a href="#services" className="font-semibold text-primary underline">Build your own plan</a>.
      </p>
    </Section>
  )
}