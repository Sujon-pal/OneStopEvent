import { useState } from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import PackageCard from "./PackageCard";
import { events } from "../../data/event";
import { packages, pujaOptions } from "../../data/packages";
import { tierPrice } from "../../data/packageHelpers";

const bookingSteps = [
  "Pick your date and place",
  "We call you to confirm",
  "Pay 30% to hold your date",
];

// Only events that have a package show as tabs.
const packageEvents = events.filter((e) => packages[e.name]);

export default function Packages() {
  const [tab, setTab] = useState(packageEvents[0]?.name ?? "Wedding"); // Selected event tab 
  const [pujaName, setPujaName] = useState(""); // selected puja name for the Puja tab, or "" if none selected
  const [open, setOpen] = useState({}); // which card details are open 

  const data = packages[tab];
  if (!data) return null;

  const { rows, tiers } = data;
  const puja =
    tab === "Puja"
      ? (pujaOptions.find((p) => p.name === pujaName) ?? null)
      : null;
  const keyOf = (i) => `${tab}-${i}`;
  const allOpen = tiers.every((_, i) => open[keyOf(i)]);

  const onTab = (name) => {
    setTab(name);
    setPujaName("");
  };
  const toggle = (i) => setOpen((o) => ({ ...o, [keyOf(i)]: !o[keyOf(i)] }));
  const toggleAll = () =>
    setOpen((o) => {
      const next = { ...o };
      tiers.forEach((_, i) => (next[keyOf(i)] = !allOpen));
      return next;
    });

  return (
    <Section id="packages" className="bg-base-200">
      <SectionHeading title="Packages for your event">
        Every package covers everything your event needs. Bigger packages bring
        more people, more hours and more extras. Packages are fixed and cannot
        be edited.
      </SectionHeading>

      <div
        role="tablist"
        aria-label="Event type"
        className="mt-6 flex flex-wrap gap-2"
      >
        {packageEvents.map((e) => (
          <button
            key={e.name}
            role="tab"
            type="button"
            aria-selected={tab === e.name}
            onClick={() => onTab(e.name)}
            className={`btn rounded-full ${tab === e.name ? "btn-primary" : "border-base-300 bg-base-100"}`}
          >
            {e.icon} {e.name}
          </button>
        ))}
      </div>

      {tab === "Puja" && (
        <div className="card mt-4 rounded-2xl border border-base-300 bg-base-100 p-5">
          <p className="font-semibold">Which puja are you planning?</p>
          <p className="mt-1 text-sm text-base-content/60">
            Choose one first. The idol and puja items depend on it, so the price
            shows after you choose.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {pujaOptions.map((p) => (
              <button
                key={p.name}
                type="button"
                aria-pressed={p.name === pujaName}
                onClick={() => setPujaName(p.name)}
                className={`btn btn-sm rounded-full ${p.name === pujaName ? "btn-primary" : "btn-outline border-base-300"}`}
              >
                {p.name}
              </button>
            ))}
          </div>
          {puja && (
            <p className="mt-3 text-sm text-base-content/60">
              <b className="text-base-content">{puja.name}:</b> {puja.note}
            </p>
          )}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={toggleAll}
          className="text-sm font-semibold text-primary underline"
        >
          {allOpen ? "Hide all details" : "View all details"}
        </button>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <PackageCard
            key={tier.name}
            eventName={tab}
            tier={tier}
            index={i}
            rows={rows}
            puja={puja}
            price={tierPrice(tab, tier, puja)}
            isOpen={!!open[keyOf(i)]}
            onToggle={() => toggle(i)}
          />
        ))}
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
        Food and catering are not part of any package. Want something different?{" "}
        <a href="#services" className="font-semibold text-primary underline">
          Build your own plan
        </a>
        .
      </p>
    </Section>
  );
}