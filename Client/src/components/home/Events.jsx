import { useState } from 'react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { events } from '../../data/event'
import { formatMoney } from '../../data/utils/money'

export default function Events() {
  const [showAll, setShowAll] = useState(false)
  const list = showAll ? events : events.slice(0, 3)

  return (
    <Section id="events">
      <SectionHeading title="Popular events">
        See what is included in the starting price, then plan it step by step.
      </SectionHeading>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {list.map((e) => (
          <button
            key={e.name}
            type="button"
            className="card items-stretch rounded-2xl border border-base-300 bg-base-100 p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl" aria-hidden="true">{e.icon}</span>
              {e.hot && <span className="badge badge-accent badge-sm font-semibold">Most booked</span>}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold">{e.name}</h3>
            <p className="mt-1 text-sm text-base-content/60">{e.desc}</p>
            <p className="mt-3 text-sm font-semibold text-primary">Starts at {formatMoney(e.price)}</p>
            <p className="text-xs text-base-content/60">Tap to see what is included and plan it</p>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button type="button" onClick={() => setShowAll(!showAll)} className="btn btn-outline btn-primary btn-sm rounded-full px-6">
          {showAll ? 'Show fewer events' : 'See more events'}
        </button>
      </div>
    </Section>
  )
}