import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl"
    >
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4 text-cyan-400">
        {value}
      </h2>
    </motion.div>
  );
}