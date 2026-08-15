import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: Props) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="
        rounded-xl
        bg-[#151B22]
        border border-[#2F3D4B]
        px-6 py-5
        min-h-[120px]
      "
    >
      <p className="text-[#9AA3AD] text-sm font-medium">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-5 text-white">
        {value}
      </h2>
    </motion.div>
  );
}