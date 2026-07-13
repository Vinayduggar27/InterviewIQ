import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import Companies from "../../components/common/Companies";
import Stats from "../../components/common/Stats";
import Features from "../../components/common/Features";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Companies />
       <Stats />
       <Features />
    </div>
  );
}