"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes. Every package can be customized according to your budget, hotel preference and sightseeing requirements.",
  },
  {
    question: "Do you provide flight bookings?",
    answer:
      "Yes. We provide domestic and international flight booking assistance with the best available fares.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes. We assist with tourist visa documentation and application for selected international destinations.",
  },
  {
    question: "Can I book my trip through WhatsApp?",
    answer:
      "Absolutely. You can discuss your itinerary, receive quotations and confirm your booking directly through WhatsApp.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer and other secure payment methods.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0b1120] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-400">
            Everything you need to know before booking your trip.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">
                  {faq.question}
                </span>

                <span className="text-2xl text-cyan-400">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-white/10 px-6 pb-5 pt-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}