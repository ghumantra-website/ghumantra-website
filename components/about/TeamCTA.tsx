import Link from "next/link";

export default function TeamCTA() {
  return (
    <section className="bg-[#0b1120] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 p-10 text-center md:p-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Plan Your Next Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Whether you&apos;re planning a honeymoon, family vacation, corporate
            tour or an international holiday, our travel experts are ready to
            create the perfect itinerary for you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-sky-700 transition hover:scale-105"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/917017105534"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-sky-700"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}