import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">

      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 py-24">
  <div className="mx-auto max-w-7xl px-6 text-center">

    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
      Contact Ghumaantra Holidays
    </p>

    <h1 className="text-5xl font-bold leading-tight md:text-6xl">
      Let&apos;s Plan Your
      <span className="block text-cyan-400">
        Next Adventure
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
      Whether you&apos;re planning a honeymoon, family vacation,
      corporate tour or an international holiday,
      our travel experts are ready to help.
    </p>

  </div>
</section>

      <ContactCards />

<ContactForm />

      {/* Office Details */}

      {/* Google Map */}

      {/* Business Hours */}

      {/* FAQ */}

    </main>
  );
}