import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-cyan-400 tracking-tight"
        >
          InterviewIQ
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-cyan-400 transition">
            How It Works
          </a>

          <a href="#testimonials" className="hover:text-cyan-400 transition">
            Testimonials
          </a>

          <a href="#faq" className="hover:text-cyan-400 transition">
            FAQ
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="text-slate-300 hover:text-white transition">
            Login
          </button>

          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2 rounded-xl transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;