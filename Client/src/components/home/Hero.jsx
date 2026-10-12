import { useState } from "react";
import { events } from "../../data/event";
import heroBg from "../../assets/hero.png";

const label = "mb-1 block text-xs font-semibold text-white/80";

const field =
  "w-full border border-white/15 bg-[#14101c]/90 text-white [color-scheme:dark] focus:border-amber-400 focus:outline-none";

export default function Hero() {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(150);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      event,
      date,
      guests: Number(guests),
    });
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-150 overflow-hidden bg-[#100d16] bg-cover bg-center bg-no-repeat text-white sm:min-h-162.5"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />

      {/* Subtle gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/75 via-black/40 to-transparent"
      />

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-10 md:py-6 ">
        <div className="max-w-2xl">
          {/* Hero Heading */}
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Plan Your Entire Event{" "}
            <span className="text-amber-400">in One Place</span>
          </h1>

          {/* Hero Description */}
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
            Wedding, holud, birthday or puja. Pick decoration, photography,
            makeup and food together, see the full cost as you go, and book
            once.
          </p>

          {/* Event Planning Form */}
          <div className="aura aura-gold mt-5 max-w-xl rounded-2xl">
            <div className="card rounded-2xl border border-white/15 bg-[#17131f]/95 text-white shadow-2xl backdrop-blur-md">
              <form onSubmit={handleSubmit} className="p-5 sm:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {/* Event Type */}
                  <label className="sm:col-span-2 xl:col-span-1">
                    <span className={label}>Event Type</span>

                    <select
                      className={`select ${field}`}
                      value={event}
                      onChange={(e) => setEvent(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select an event
                      </option>

                      {events.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  {/* Event Date */}
                  <label>
                    <span className={label}>Event Date</span>

                    <input
                      type="date"
                      className={`input ${field}`}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toLocaleDateString("en-CA")}
                      required
                    />
                  </label>

                  {/* Number of Guests */}
                  <label>
                    <span className={label}>Guests</span>

                    <input
                      type="number"
                      min="10"
                      max="2000"
                      step="10"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className={`input ${field}`}
                      required
                    />
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-accent mt-5 w-full rounded-full border-0 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-400/20"
                >
                  Start Planning
                  <span aria-hidden="true">→</span>
                </button>

                {/* Trust Message */}
                <p className="mt-3 text-center text-xs leading-relaxed text-white/55">
                  Free to plan. See your estimated total before booking.
                </p>
              </form>
            </div>
          </div>

          {/* Supporting Text */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white sm:text-sm">
            <span>✓ All events in one place</span>
            <span>✓ Flexible packages</span>
            <span>✓ Easy planning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
