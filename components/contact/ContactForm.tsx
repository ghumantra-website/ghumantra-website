export default function ContactForm() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get Free Quote
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Plan Your Dream Holiday
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Share your travel requirements and our experts will prepare
            a customized itinerary with the best available price.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

          {<form className="grid gap-6 md:grid-cols-2">

  <input
    type="text"
    placeholder="Full Name"
    className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
  />

  <input
    type="email"
    placeholder="Email Address"
    className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
  />

  <select
  defaultValue=""
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-400 outline-none focus:border-cyan-400"
>
  <option value="" disabled>
    Select Destination
  </option>
  <option>Bali</option>
  <option>Dubai</option>
  <option>Thailand</option>
  <option>Vietnam</option>
  <option>Kashmir</option>
  <option>Goa</option>
  <option>Kerala</option>
  <option>Andaman</option>
  <option>Custom Destination</option>
</select>
<input
  type="date"
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-400 outline-none focus:border-cyan-400"
/>

<input
  type="text"
  placeholder="Departure City"
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
/>

<input
  type="number"
  placeholder="No. of Adults"
  min="1"
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
/>

<input
  type="number"
  placeholder="No. of Children"
  min="0"
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
/>
<select
  defaultValue=""
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-400 outline-none focus:border-cyan-400"
>
  <option value="" disabled>
    Hotel Category
  </option>
  <option>3 Star</option>
  <option>4 Star</option>
  <option>5 Star</option>
  <option>Luxury</option>
</select>

<select
  defaultValue=""
  className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-400 outline-none focus:border-cyan-400"
>
  <option value="" disabled>
    Budget Range
  </option>
  <option>₹20,000 - ₹50,000</option>
  <option>₹50,000 - ₹1,00,000</option>
  <option>₹1,00,000 - ₹2,00,000</option>
  <option>Above ₹2,00,000</option>
</select>
<textarea
  rows={5}
  placeholder="Tell us about your dream trip..."
  className="md:col-span-2 rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
/>
<button
  type="submit"
  className="md:col-span-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600"
>
  Get My Free Customized Quote
</button>

</form>}

        </div>

      </div>
    </section>
  );
}