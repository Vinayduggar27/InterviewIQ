import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import Companies from "../../components/common/Companies";
import Stats from "../../components/common/Stats";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/common/HowItWorks";
import Testimonials from "../../components/common/Testimonials";
import FAQ from "../../components/common/FAQ";
import Cta from "../../components/common/Cta";
import Footer from "../../components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Companies />
       <Stats />
       <Features />
       <HowItWorks />
       <Testimonials />
       <FAQ />
       <Cta />
       <Footer />
    </div>
  );
}