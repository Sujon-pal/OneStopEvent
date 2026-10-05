import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { reviews, ratingBars } from '../../data/reviews'

const Stars = ({ className = '' }) => (
  <p role="img" aria-label="5 out of 5 stars" className={`tracking-wide text-accent ${className}`}>★★★★★</p>
)

export default function Reviews() {
  return (
    <Section id="reviews">
      <SectionHeading title="What our customers say">
        Words from people whose events we have completed. Every review comes from a real booking.
      </SectionHeading>

      <div className="mt-8 grid items-center gap-6 rounded-3xl border border-base-300 bg-linear-to-br from-base-100 to-base-200 p-7 md:grid-cols-[auto_1fr] md:gap-12">
        <div className="text-center md:text-left">
          <p className="font-display text-6xl font-bold text-primary">4.9</p>
          <Stars className="mt-1 text-xl" />
          <p className="mt-1 text-sm text-base-content/60">Based on 128 reviews</p>
        </div>
        <div>
          <div className="space-y-2">
            {ratingBars.map((b) => (
              <div key={b.stars} className="flex items-center gap-3 text-xs">
                <span className="w-6 shrink-0 text-base-content/60">{b.stars} ★</span>
                <progress className="progress progress-accent h-2 flex-1" value={b.pct} max="100" />
                <span className="w-9 shrink-0 text-right text-base-content/60">{b.pct}%</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-base-content/60">Sample numbers for this design. Real ratings will come from completed bookings.</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="card relative rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <span aria-hidden="true" className="pointer-events-none absolute right-6 top-3 font-display text-7xl leading-none text-accent/25">“</span>
            <Stars className="text-lg" />
            <blockquote className="mt-3 flex-1 leading-relaxed">{r.text}</blockquote>
            <div className="mt-5 flex items-center gap-3 border-t border-base-300 pt-4">
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#7c3aed] to-[#9f1239] text-sm font-bold text-white">
                {r.initials}
              </span>
              <figcaption className="min-w-0">
                <span className="block text-sm font-semibold">{r.name}</span>
                <span className="block truncate text-xs text-base-content/60">{r.info}</span>
              </figcaption>
              <span className="badge badge-soft badge-success badge-sm ml-auto shrink-0 font-semibold">✓ Verified</span>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  )
}