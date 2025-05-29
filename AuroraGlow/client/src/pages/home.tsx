import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyUsSection from "@/components/why-us-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
