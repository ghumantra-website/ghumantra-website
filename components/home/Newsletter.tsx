export default function Newsletter() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-center">

          <h2 className="text-4xl font-bold text-white">
            Never Miss a Travel Deal ✈️
          </h2>

          <p className="mt-4 text-gray-400">
            Get exclusive holiday packages, seasonal offers and travel updates directly in your inbox.
          </p>

          <form className="mt-8 flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <button
              type="submit"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}