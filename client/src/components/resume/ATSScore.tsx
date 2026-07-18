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
    if (score >= 85) return "#22c55e";
    if (score >= 70) return "#3b82f6";
    if (score >= 50) return "#f59e0b";
    return "#ef4444";
  };

  const getLabel = () => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Very Good";
    if (score >= 50) return "Average";
    return "Needs Improvement";
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center">

      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 text-3xl">
        📊
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        ATS Score
      </h2>

      <p className="text-gray-500 mt-2 text-center">
        Overall resume compatibility
      </p>

      <div className="relative w-56 h-56 mt-8">

        <svg
          height="100%"
          width="100%"
          viewBox="0 0 180 180"
        >
          <circle
            stroke="#EEF2FF"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="90"
            cy="90"
          />

          <circle
            stroke={getColor()}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset .25s ease",
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
            className="mt-3 px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: `${getColor()}20`,
              color: getColor(),
            }}
          >
            {getLabel()}
          </span>

        </div>

      </div>

      <div className="mt-8 w-full border-t pt-6">

        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Resume Quality</span>
          <span>{score}/100</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${displayScore}%`,
              backgroundColor: getColor(),
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default ATSScore;