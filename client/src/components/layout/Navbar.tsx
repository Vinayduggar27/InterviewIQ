import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#10151C] border-b border-[#2F3D4B]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#6B8FB8] hover:text-[#8BA8C7] transition"
        >
          InterviewIQ
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[#C7CDD4]">
          <a
            href="#features"
            className="hover:text-[#6B8FB8] transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="hover:text-[#6B8FB8] transition"
          >
            How It Works
          </a>

          <a
            href="#testimonials"
            className="hover:text-[#6B8FB8] transition"
          >
            Testimonials
          </a>

          <a
            href="#faq"
            className="hover:text-[#6B8FB8] transition"
          >
            FAQ
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <Link
            to="/login"
            className="text-[#C7CDD4] hover:text-white transition font-medium"
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            to="/register"
            className="bg-[#4F7CAC] hover:bg-[#3F6790] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm"
          >
            Get Started
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;