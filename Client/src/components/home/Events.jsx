import { useState } from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { events } from "../../data/event";
import { formatMoney } from "../../data/utils/money";

export default function Events() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? events : events.slice(0, 3);

  return (
    <Section id="events">
      <SectionHeading title="Popular events">
        See what is included in the starting price, then plan it step by step.
      </SectionHeading>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        {list.map((e) => (
          <button
            key={e.name}
            type="button"
            className="card group relative min-h-72 justify-end overflow-hidden rounded-2xl border border-base-300 p-5 text-left text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg "
          >
            <img
              src={e.image}
              alt=""
              loading="lazy"
              width="640"
              height="400"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent"
            />
            {e.hot && (
              <span className="badge badge-accent badge-sm absolute right-4 top-4 font-bold  shadow-lg shadow-accent/50">
                Most booked
              </span>
            )}

            <div className="relative">
              <h3 className="font-display text-xl font-semibold">{e.name}</h3>
              <p className="mt-1 text-sm text-white/80">{e.desc}</p>
              <p className="mt-3 text-sm font-semibold text-accent">
                Starts at {formatMoney(e.price)}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="aura aura-gold">
          <div className="card bg-base-100">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline btn-primary btn-sm rounded-full px-6"
            >
              {showAll ? "Show fewer events" : "See more events"}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
