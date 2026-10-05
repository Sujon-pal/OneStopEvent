import { Fragment } from 'react'

const steps = [
  ['Choose event', 'Wedding, holud, puja'],
  ['Add services', 'Decoration, photo, makeup'],
  ['Add food', 'Per guest, veg menu'],
  ['Book and confirm', 'We call, then you pay'],
]

export default function Steps() {
  return (
    <section aria-label="How it works" className="border-y border-white/10 bg-neutral text-neutral-content">
      <ol className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 lg:flex lg:items-center">
        {steps.map(([title, sub], i) => (
          <Fragment key={title}>
            {i > 0 && (
              <li aria-hidden="true" className="mx-4 hidden h-px min-w-6 flex-1 bg-linear-to-r from-violet-400/70 to-accent/50 lg:block" />
            )}
            <li className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-semibold ring-4 ring-violet-500/20 ${
                  i === 3 ? 'bg-accent text-accent-content' : 'bg-linear-to-br from-[#7c3aed] to-[#5b21b6] text-white'
                }`}
              >
                {i + 1}
              </span>
              <span>
                <span className="block font-semibold leading-tight">{title}</span>
                <span className="mt-0.5 block text-xs leading-snug text-white/75">{sub}</span>
              </span>
            </li>
          </Fragment>
        ))}
      </ol>
    </section>
  )
}