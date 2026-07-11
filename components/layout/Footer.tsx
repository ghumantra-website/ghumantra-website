import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Ghumaantra Holidays
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Creating memorable domestic and international holidays with
              personalized planning and trusted travel services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">International Tours</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Popular Destinations
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Bali</li>
              <li>Dubai</li>
              <li>Thailand</li>
              <li>Kashmir</li>
              <li>Vietnam</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400" />
                <span>+91 7017105534</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400" />
                <span>ops1@ghumantra.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-1" />
                <span>
                  FF14 Mark Mall,
                  Vasundhara Sector 4B,
                  Ghaziabad, Uttar Pradesh
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ghumaantra Holidays. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">

            <a href="#" className="hover:text-cyan-400 transition">
              <FaFacebookF size={18} />
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              <FaInstagram size={18} />
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}