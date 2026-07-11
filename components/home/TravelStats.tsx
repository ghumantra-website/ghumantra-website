export default function TravelStats() {
  const stats = [
    {
      number: "10,000+",
      title: "Happy Travelers",
    },
    {
      number: "150+",
      title: "Destinations",
    },
    {
      number: "5+",
      title: "Years Experience",
    },
    {
      number: "24×7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-300">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}