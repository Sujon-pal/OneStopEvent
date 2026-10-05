import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { faqs } from '../../data/faqs'

export default function Faq() {
  return (
    <Section id="faq" className="bg-base-200">
      <SectionHeading title="Questions people ask" />
      <div className="mt-8 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="collapse collapse-arrow rounded-2xl border border-base-300 bg-base-100">
            {/* Same radio name, so opening one closes the other. */}
            <input type="radio" name="faq" defaultChecked={i === 0} aria-label={f.q} />
            <div className="collapse-title font-semibold">{f.q}</div>
            <div className="collapse-content text-sm text-base-content/70">{f.a}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}