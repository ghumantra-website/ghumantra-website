import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Image
          src="/images/logo/logo.png"
          alt="Ghumaantra Holidays"
          width={260}
          height={70}
          priority
        />

        <div className="hidden md:flex items-center gap-8 font-medium text-white">
          <Link href="/">Home</Link>

<Link href="/domestic">Domestic</Link>

<Link href="/international">International</Link>

<Link href="/hotels">Hotels</Link>

<Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}