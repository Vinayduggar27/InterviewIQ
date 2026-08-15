import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Mock Interviews" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Top Companies" },
  { value: "24/7", label: "AI Support" },
];

export default function Stats() {
  return (
    <section className="bg-[#12181F] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl font-bold text-[#6B8FB8]">
                {item.value}
              </h2>

              <p className="text-[#9AA3AD] mt-3">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}