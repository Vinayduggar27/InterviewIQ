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
    <section
      id="testimonials"
      className="bg-[#12181F] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          What Students Say
        </motion.h2>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#151B22] border border-[#2F3D4B] rounded-2xl p-8 hover:border-[#4F7CAC] transition-all duration-300"
            >
              <p className="text-[#C7CDD4] italic">
                "{review.review}"
              </p>

              <h3 className="text-white font-bold mt-5">
                {review.name}
              </h3>

              <p className="text-[#6B8FB8] text-sm mt-1">
                {review.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}