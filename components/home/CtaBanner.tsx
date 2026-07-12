import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 p-10 md:p-16">

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 text-center">

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready For Your Next Adventure?
            </h2>

            <p className="mt-5 text-lg text-gray-100 max-w-2xl mx-auto">
              Discover unforgettable destinations with Ghumaantra Holidays.
              Let us plan your perfect holiday while you enjoy every moment.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-7 py-3 font-semibold text-sky-700 transition hover:scale-105"
              >
                Plan My Trip
              </Link>

              <a
                href="https://wa.me/917017105534"
                target="_blank"
                className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-sky-700"
              >
                WhatsApp Us
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}