import { useEffect, useState } from "react";

const steps = [
  "📄 Reading resume...",
  "🧠 Extracting skills...",
  "🎯 Calculating ATS score...",
  "🤖 Generating AI suggestions...",
];

const Loading = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 flex flex-col items-center">

      <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <h2 className="mt-8 text-3xl font-bold text-gray-800">
        AI Resume Analysis
      </h2>

      <p className="mt-3 text-gray-500">
        Please wait while our AI analyzes your resume.
      </p>

      <div className="mt-10 w-full max-w-lg bg-white rounded-2xl shadow-md border p-6">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-3"
          >
            {index < currentStep ? (
              <span className="text-green-600 text-xl">✓</span>
            ) : index === currentStep ? (
              <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
            ) : (
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            )}

            <span
              className={`${
                index <= currentStep
                  ? "text-gray-800 font-medium"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Loading;