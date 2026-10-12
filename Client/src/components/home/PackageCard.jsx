import { tierStyles, tierTaglines, VISIBLE_ROWS } from "../../data/packages";
import { fillValue } from "../../data/packageHelpers";
import { formatMoney } from "../../data/utils/money";

// Makes numbers like "3 photographers" bold, without using dangerouslySetInnerHTML.
function Highlight({ text }) {
  return text
    .split(/(\b\d+\s[A-Za-z]+)/g)
    .map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part));
}

export default function PackageCard({
  eventName,
  tier,
  index,
  rows,
  price,
  puja,
  isOpen,
  onToggle,
}) {
  const popular = index === 1;
  const style = tierStyles[index];
  const locked = price === null;
  const shown = isOpen ? rows : rows.slice(0, VISIBLE_ROWS);

  return (
    <article
      className={`card h-full overflow-hidden rounded-2xl bg-base-100 shadow-md ${
        popular ? "border-2 border-accent" : "border border-base-300"
      }`}
    >
      <div
        className={`relative bg-linear-to-br p-6 text-white ${style.header}`}
      >
        <p className="text-sm text-white/80">{puja ? puja.name : eventName}</p>
        {popular && (
          <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-800">
            Most booked
          </span>
        )}
        <h3 className="mt-1 font-display text-2xl font-semibold">
          {tier.name}
        </h3>
        <p className="text-sm text-white/85">{tierTaglines[index]}</p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="badge badge-soft badge-primary w-fit font-semibold">
          Up to {tier.guests} guests
        </span>

        {locked ? (
          <p className="mt-4 text-sm font-semibold text-base-content/60">
            Choose your puja to see the price
          </p>
        ) : (
          <>
            <p className="mt-4 text-3xl font-bold">{formatMoney(price)}</p>
            <p className="text-xs text-base-content/60">Fixed price</p>
          </>
        )}

        <button
          type="button"
          disabled={locked}
          className={`btn mt-5 w-full rounded-full border-0 ${locked ? "" : style.button}`}
        >
          {locked ? "Choose a puja first" : "Book this package"}
        </button>

        <ul className="mt-6 space-y-4 border-t border-base-300 pt-5">
          {shown.map((row, k) => {
            const value = fillValue(tier.values[k], puja);
            return (
              <li
                key={row.label}
                className={`flex gap-3 ${value === null ? "opacity-50" : ""}`}
              >
                <span
                  className="w-6 shrink-0 text-center text-lg leading-6"
                  aria-hidden="true"
                >
                  {row.icon}
                </span>
                <span>
                  <span className="block text-xs text-base-content/60">
                    {row.label}
                  </span>
                  <span className="block leading-snug">
                    {value === null ? (
                      <span className="text-base-content/60">Not included</span>
                    ) : (
                      <Highlight text={value} />
                    )}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="mt-5 self-start text-left text-sm font-semibold text-primary underline"
        >
          {isOpen
            ? "Hide details"
            : `View details (${rows.length - VISIBLE_ROWS} more)`}
        </button>
      </div>
    </article>
  );
}
