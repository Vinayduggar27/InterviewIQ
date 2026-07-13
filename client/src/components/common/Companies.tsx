import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Apple",
  "Meta",
  "Netflix",
];

export default function Companies() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-slate-400 uppercase tracking-widest mb-10">
          Trusted by candidates preparing for
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl py-5 text-center text-white font-semibold shadow-lg hover:bg-cyan-500 transition"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}