import HeroArt from './HeroArt'
import { events } from '../../data/events'

const label = 'mb-1 block text-xs font-semibold text-white/75'
const field = 'w-full border-white/10 bg-[#14101c] text-white [color-scheme:dark]'

export default function Hero() {
  return (
    <section className="hero-bg text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Plan Your Entire Event in One Place
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-white/80">
            Wedding, holud, birthday or puja. Pick decoration, photography, makeup and food together,
            see the full cost as you go, and book once.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 max-w-lg rounded-3xl border border-accent/35 bg-[#181222]/90 p-5 shadow-2xl sm:p-6"
          >
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
              <label className="col-span-2 xl:col-span-1">
                <span className={label}>Event</span>
                <select className={`select ${field}`} defaultValue="Wedding">
                  {events.map((e) => <option key={e.name}>{e.name}</option>)}
                </select>
              </label>
              <label>
                <span className={label}>Date</span>
                <input type="date" className={`input ${field}`} />
              </label>
              <label>
                <span className={label}>Guests</span>
                <input type="number" min="10" max="2000" step="10" defaultValue="150" className={`input ${field}`} />
              </label>
            </div>
            <button type="submit" className="btn btn-accent btn-lg mt-4 w-full rounded-full">
              Start planning
            </button>
            <p className="mt-3 text-center text-xs text-white/75">
              Free to build. See your total before you pay anything.
            </p>
          </form>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <HeroArt />
        </div>
      </div>
    </section>
  )
}