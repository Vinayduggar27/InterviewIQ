import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Google",
    review:
      "InterviewIQ helped me improve my confidence and land my dream job.",
  },
  {
    name: "Priya Singh",
    role: "SDE Intern @ Microsoft",
    review:
      "The AI feedback was surprisingly accurate and incredibly helpful.",
  },
  {
    name: "Aman Gupta",
    role: "Backend Developer",
    review:
      "The mock interviews felt realistic and improved my communication skills.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          What Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8"
            >
              <p className="text-slate-300 italic">
                "{review.review}"
              </p>

              <h3 className="text-white font-bold mt-6">
                {review.name}
              </h3>

              <p className="text-cyan-400 text-sm">
                {review.role}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}