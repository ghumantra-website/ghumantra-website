import Image from "next/image";

const destinations = [
  {
    name: "Kashmir",
    image: "/images/destinations/kashmir.jpg",
    duration: "5N / 6D",
    price: "₹18,999",
  },
  {
    name: "Bali",
    image: "/images/destinations/bali.jpg",
    duration: "4N / 5D",
    price: "₹24,999",
  },
  {
    name: "Vietnam",
    image: "/images/destinations/vietnam.jpg",
    duration: "5N / 6D",
    price: "₹29,999",
  },
  {
    name: "Kerala",
    image: "/images/destinations/kerala.jpg",
    duration: "4N / 5D",
    price: "₹16,999",
  },
  {
    name: "Meghalaya",
    image: "/images/destinations/meghalaya.jpg",
    duration: "5N / 6D",
    price: "₹19,999",
  },
  {
    name: "Dubai",
    image: "/images/destinations/dubai.jpg",
    duration: "4N / 5D",
    price: "₹34,999",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Destinations
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Discover our most loved travel experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {destinations.map((destination) => (

            <div
              key={destination.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <Image
                src={destination.image}
                alt={destination.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {destination.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {destination.duration}
                </p>

                <p className="text-blue-700 text-xl font-bold mt-4">
                  Starting From <br />
                  {destination.price}
                </p>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                  Explore Package →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}