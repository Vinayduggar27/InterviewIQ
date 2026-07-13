import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaFileAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Mock Interviews",
    description:
      "Practice with an AI interviewer that adapts to your answers."
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Performance Analytics",
    description:
      "Track confidence, communication, technical knowledge and improvement."
  },
  {
    icon: <FaFileAlt size={40} />,
    title: "Resume Review",
    description:
      "Receive instant AI suggestions to strengthen your resume."
  }
];

export default function Features() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Powerful Features
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-16">
          Everything you need to crack your dream interview.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.2 }}
              viewport={{ once:true }}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 transition shadow-xl"
            >

              <div className="text-cyan-400 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}