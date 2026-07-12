import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import TravelStats from "@/components/home/TravelStats";
import TrendingPackages from "@/components/home/TrendingPackages";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CtaBanner from "@/components/home/CtaBanner";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <TrendingPackages />
      <Testimonials />
      <CtaBanner />
      <TravelStats />
      <Footer />
      <WhatsAppButton />
      
    </>
  );
}