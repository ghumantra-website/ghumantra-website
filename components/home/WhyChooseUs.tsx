import {
  ShieldCheck,
  Headphones,
  Wallet,
  MapPinned,
  Plane,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Travel Experts",
    description:
      "Years of experience creating memorable holidays with verified partners worldwide.",
  },
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    description:
      "Premium vacations at competitive prices with complete transparency.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description:
      "Our travel experts are available whenever you need assistance.",
  },
  {
    icon: MapPinned,
    title: "Customized Itineraries",
    description:
      "Every trip is carefully designed according to your travel style and budget.",
  },
  {
    icon: Plane,
    title: "Worldwide Destinations",
    description:
      "From Kashmir to Europe, discover unforgettable journeys across the globe.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Hotels",
    description:
      "Stay at carefully selected hotels known for comfort, quality, and service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            WHY GHUMAANTRA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Travel Beyond Expectations
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            We don&apos;t just book trips—we design unforgettable travel experiences... with premium service, personalized itineraries, and
            dedicated support from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}