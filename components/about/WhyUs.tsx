const features = [
  {
    title: "Customized Packages",
    description:
      "Every trip is planned according to your budget, travel style and preferences.",
  },
  {
    title: "Best Price Guarantee",
    description:
      "Competitive pricing with complete transparency and no hidden charges.",
  },
  {
    title: "24×7 Travel Support",
    description:
      "Our team is available before, during and after your journey whenever you need assistance.",
  },
  {
    title: "Trusted Travel Experts",
    description:
      "Years of experience in domestic and international holiday planning.",
  },
  {
    title: "Handpicked Hotels",
    description:
      "Comfortable and verified accommodations for a memorable stay.",
  },
  {
    title: "Secure Booking",
    description:
      "Safe payment options with reliable booking confirmation and support.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0f172a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-cyan-400">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Why Thousands of Travelers Trust Ghumaantra Holidays
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            We focus on delivering seamless travel experiences with excellent
            customer service, carefully planned itineraries and unbeatable value.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}