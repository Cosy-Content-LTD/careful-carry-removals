import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import HowItWorks from "@/sections/HowItWorks";
import Stats from "@/sections/Stats";
import CoverageArea from "@/sections/CoverageArea";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Stats />
      <CoverageArea />
      <Contact />
      <Footer />
    </div>
  );
}
