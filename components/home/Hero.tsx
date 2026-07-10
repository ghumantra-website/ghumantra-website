export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[6px] text-blue-300 font-semibold">
            Welcome to Ghumaantra Holidays
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Where Every Journey
            <br />
            Becomes a Story
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
            Discover handcrafted holidays across India and the world.
            From romantic honeymoons to unforgettable family vacations,
            we make every journey special.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-xl">
              Explore Packages
            </button>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300">
  Plan My Trip
</button>

          </div>

        </div>
      </div>
    </section>
  );
}