import { useEffect, useState } from "react";

interface ATSScoreProps {
  score: number;
}

const ATSScore = ({ score }: ATSScoreProps) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current++;

      setDisplayScore(current);

      if (current >= score) {
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [score]);

  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (displayScore / 100) * circumference;

  const getColor = () => {
    if (score >= 80) return "#22c55e";
    if (score >= 60) return "#facc15";
    return "#ef4444";
  };

  const getLabel = () => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center">

      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        ATS Score
      </h2>

      <div className="relative w-52 h-52">

        <svg
          height="100%"
          width="100%"
          viewBox="0 0 180 180"
        >
          {/* Background Circle */}

          <circle
            stroke="#E5E7EB"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="90"
            cy="90"
          />

          {/* Progress Circle */}

          <circle
            stroke={getColor()}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 0.2s linear",
            }}
            r={normalizedRadius}
            cx="90"
            cy="90"
            transform="rotate(-90 90 90)"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-5xl font-bold text-gray-800">
            {displayScore}%
          </span>

          <span
            className="mt-2 font-semibold"
            style={{ color: getColor() }}
          >
            {getLabel()}
          </span>

        </div>

      </div>

    </div>
  );
};

export default ATSScore;