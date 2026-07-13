import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-950">
      <div className="max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Ace Every Interview
          <br />
          <span className="text-cyan-400">with AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-slate-400 text-lg max-w-3xl mx-auto"
        >
          Practice technical interviews, receive instant AI feedback,
          improve your resume, and land your dream job faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center gap-5"
        >
          <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-xl font-semibold transition">
            <button
  onClick={() => navigate("/register")}
  className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold transition"
>
  Start Free
</button>
          </button>

          <button className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-xl text-white transition">
            <button
  onClick={() => navigate("/login")}
  className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-xl transition"
>
  Watch Demo
</button>
          </button>
        </motion.div>

      </div>
    </section>
  );
}