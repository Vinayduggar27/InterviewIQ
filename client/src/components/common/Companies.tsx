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
    <section className="bg-[#12181F] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[#9AA3AD] mb-8"
        >
          Trusted by candidates preparing for
        </motion.p>

        {/* Companies */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#151B22] border border-[#2F3D4B] rounded-xl py-5 text-center text-[#C7CDD4] font-semibold shadow-sm hover:bg-[#4F7CAC] hover:text-white transition"
            >
              {company}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}