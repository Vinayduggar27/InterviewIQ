import { motion } from "framer-motion";
import { FaUserPlus, FaMicrophone, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus size={36} />,
    title: "Create an Account",
    description: "Sign up in seconds and personalize your interview journey.",
  },
  {
    icon: <FaMicrophone size={36} />,
    title: "Take an AI Interview",
    description: "Practice with realistic AI interview questions anytime.",
  },
  {
    icon: <FaChartLine size={36} />,
    title: "Get Instant Feedback",
    description: "Receive detailed performance analysis and improvement tips.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          How It Works
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-16">
          Three simple steps to become interview-ready.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-xl"
            >

              <div className="flex justify-center text-cyan-400 mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}