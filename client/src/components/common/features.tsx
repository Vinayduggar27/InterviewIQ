import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaFileAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={34} />,
    title: "AI Mock Interviews",
    description:
      "Practice with an AI interviewer that adapts to your answers.",
  },
  {
    icon: <FaChartLine size={34} />,
    title: "Performance Analytics",
    description:
      "Track confidence, communication, technical knowledge and improvement.",
  },
  {
    icon: <FaFileAlt size={34} />,
    title: "Resume Review",
    description:
      "Receive instant AI suggestions to strengthen your resume.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
          Powerful Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[#9AA3AD] mt-4 mb-16"
        >
          Everything you need to crack your dream interview.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#151B22] border border-[#2F3D4B] rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-[#4F7CAC] transition-all duration-300 shadow-sm"
            >
              {/* Icon */}
              <div className="text-[#6B8FB8] flex justify-center mb-5">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#9AA3AD] mt-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}