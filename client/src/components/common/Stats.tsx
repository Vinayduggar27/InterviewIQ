import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Mock Interviews" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Top Companies" },
  { value: "24/7", label: "AI Support" },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.2 }}
              viewport={{ once:true }}
              className="text-center"
            >

              <h2 className="text-5xl font-bold text-cyan-400">
                {item.value}
              </h2>

              <p className="text-slate-400 mt-3">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}