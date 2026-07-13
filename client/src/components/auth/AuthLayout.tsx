import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl -top-32 -left-24" />
      <div className="absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl bottom-0 right-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-bold text-white">
            {title}
          </h1>

          <p className="text-slate-400 mt-3">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>

        </div>
      </motion.div>

    </div>
  );
}