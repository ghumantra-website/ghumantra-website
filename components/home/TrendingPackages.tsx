import Image from "next/image";

const packages = [
  {
    title: "Bali",
    duration: "5N / 6D",
    price: "₹24,999",
    image: "/images/bali.jpg",
  },
  {
    title: "Dubai",
    duration: "4N / 5D",
    price: "₹29,999",
    image: "/images/dubai.jpg",
  },
  {
    title: "Thailand",
    duration: "5N / 6D",
    price: "₹19,999",
    image: "/images/thailand.jpg",
  },
];

export default function TrendingPackages() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Trending Tours
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Most Popular Packages
          </h2>

          <p className="text-gray-400 mt-4">
            Handpicked destinations loved by our travelers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 transition duration-300"
            >
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.duration}
                </p>

                <p className="text-cyan-400 text-xl font-semibold mt-4">
                  From {item.price}
                </p>

                <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold hover:bg-cyan-600 transition">
                  View Package
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}