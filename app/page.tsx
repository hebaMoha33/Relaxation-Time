import Navbar from "@/components/layout/Navbar";
import  About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#050505] text-[#d4af37] font-serif overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
