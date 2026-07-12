const partners = [
  "IndiGo",
  "Air India",
  "Vistara",
  "MakeMyTrip",
  "Booking.com",
  "Agoda",
];

export default function TrustedPartners() {
  return (
    <section className="bg-[#0b1120] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Trusted Travel Partners
          </h2>
          <p className="mt-3 text-gray-400">
            We work with leading airlines, hotels and travel partners.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-white"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}