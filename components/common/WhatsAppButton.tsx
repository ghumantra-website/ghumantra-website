"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "917017105534";

  const message =
    "Hi Ghumaantra Holidays, I'm interested in a holiday package.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600 animate-pulse">
        <FaWhatsapp size={34} />
      </div>
    </a>
  );
}