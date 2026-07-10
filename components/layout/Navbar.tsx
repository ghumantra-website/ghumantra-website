import Image from "next/image";

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
          <a href="#">Home</a>
          <a href="#">Domestic</a>
          <a href="#">International</a>
          <a href="#">Hotels</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}