export default function CtaBand() {
  return (
    <section className="bg-linear-to-br from-[#3b0f7a] via-[#5b21b6] to-[#7a1736] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready to plan your event?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Build your plan for free, see the total, and we will call you to confirm.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#top" className="btn btn-accent btn-lg rounded-full">Start planning</a>
          <a href="#packages" className="btn btn-outline btn-lg rounded-full border-white/40 text-white hover:bg-white/10">
            See packages
          </a>
        </div>
      </div>
    </section>
  )
}