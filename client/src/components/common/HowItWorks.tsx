import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaMicrophone,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus size={34} />,
    title: "Create an Account",
    description:
      "Sign up in seconds and personalize your interview journey.",
  },
  {
    icon: <FaMicrophone size={34} />,
    title: "Take an AI Interview",
    description:
      "Practice with realistic AI interview questions anytime.",
  },
  {
    icon: <FaChartLine size={34} />,
    title: "Get Instant Feedback",
    description:
      "Receive detailed performance analysis and improvement tips.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[#9AA3AD] mt-4 mb-16"
        >
          Three simple steps to become interview-ready.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#151B22] border border-[#2F3D4B] rounded-2xl p-8 text-center shadow-sm hover:border-[#4F7CAC] transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center text-[#6B8FB8] mb-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#9AA3AD] mt-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}