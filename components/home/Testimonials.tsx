const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    destination: "Kashmir",
    review:
      "Everything was perfectly managed. Hotels, cab and sightseeing were excellent. Highly recommended!",
  },
  {
    name: "Neha Gupta",
    location: "Jaipur",
    destination: "Bali",
    review:
      "Best honeymoon trip ever. Thank you Ghumaantra Holidays for making our vacation memorable.",
  },
  {
    name: "Aman Singh",
    location: "Lucknow",
    destination: "Thailand",
    review:
      "Professional service with quick support throughout the journey. Will definitely book again.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            What Our Travelers Say
          </h2>
          <p className="text-gray-400 mt-3">
            Trusted by hundreds of happy travellers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>

              <p className="text-gray-300 leading-7 mb-6">
  <span className="text-cyan-400 text-xl">&ldquo;</span>
  {item.review}
  <span className="text-cyan-400 text-xl">&rdquo;</span>
</p>


              <div>
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.location}</p>
                <p className="text-cyan-400 mt-2 text-sm">
                  Trip: {item.destination}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}