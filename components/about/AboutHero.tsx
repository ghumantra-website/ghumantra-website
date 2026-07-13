import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
          About Ghumaantra Holidays
        </span>

        <h1 className="mt-6 text-5xl font-bold text-white md:text-6xl">
          Creating Unforgettable
          <span className="block text-cyan-400">
            Travel Experiences
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          We specialize in domestic and international holiday packages,
          honeymoon trips, family vacations, group tours and customized travel
          experiences.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600"
          >
            Contact Us
          </Link>

          <Link
            href="/packages"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white hover:text-black"
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}