import { Phone, Mail, MapPin } from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our travel experts.",
    values: [
      "+91 7017105534",
      "+91 8881925669",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your travel requirements anytime.",
    values: [
      "ops1@ghumantra.com",
      "sales@ghumantra.com",
    ],
  },
  {
    icon: MapPin,
    title: "Visit Office",
    description: "Meet us for personalized travel planning.",
    values: [
      "FF14 Mark Mall",
      "Vasundhara Sector 4B",
      "Ghaziabad, Uttar Pradesh",
    ],
  },
];

export default function ContactCards() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Choose Your Preferred Way to Connect
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Our travel experts are available to help you plan your perfect holiday.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20">
                  <Icon className="text-cyan-400" size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {card.description}
                </p>

                <div className="mt-5 space-y-2">
                  {card.values.map((item) => (
                    <p
                      key={item}
                      className="text-slate-300"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}