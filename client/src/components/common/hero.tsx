import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#12181F] text-white px-6">
      <div className="text-center max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Ace Every Interview
          <br />
          <span className="text-[#6B8FB8]">
            with AI
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-[#9AA3AD] text-lg max-w-3xl mx-auto"
        >
          Practice technical interviews, receive instant AI feedback,
          improve your resume, and land your dream job faster.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center gap-5"
        >
          {/* Start Free */}
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 rounded-lg bg-[#4F7CAC] text-white font-medium
                       hover:bg-[#3F6790] transition-all duration-200 shadow-sm"
          >
            Start Free
          </button>

          {/* Watch Demo */}
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 rounded-lg border border-[#2F3D4B]
                       bg-transparent text-white font-medium
                       hover:bg-[#181E25] transition-all duration-200"
          >
            Watch Demo
          </button>
        </motion.div>

      </div>
    </section>
  );
}