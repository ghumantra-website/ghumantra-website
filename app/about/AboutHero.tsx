import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          About Ghumaantra Holidays
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Creating Unforgettable
          <span className="block text-cyan-400">
            Travel Experiences
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Ghumaantra Holidays specializes in domestic and international holiday
          packages, customized tours, honeymoon trips, family vacations,
          corporate travel and group departures with trusted service and
          transparent pricing.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/packages"
            className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            Explore Packages
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}