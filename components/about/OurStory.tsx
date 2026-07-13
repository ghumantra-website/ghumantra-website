export default function OurStory() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="font-semibold uppercase tracking-widest text-cyan-400">
            Our Story
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Passionate About Travel
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Ghumaantra Holidays was founded with a simple vision—to make travel
            easy, memorable and affordable for everyone. We carefully design
            every itinerary according to our clients&apos; preferences.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            From weekend getaways to international holidays, we ensure every
            trip is smooth, comfortable and unforgettable.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">1000+</h3>
              <p className="text-gray-400">Happy Travelers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100+</h3>
              <p className="text-gray-400">Destinations</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">24×7</h3>
              <p className="text-gray-400">Support</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400">Customized Tours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}