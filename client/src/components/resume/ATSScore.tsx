interface ATSScoreProps {
  score: number;
}

const ATSScore = ({ score }: ATSScoreProps) => {
  const getColor = () => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getLabel = () => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        ATS Score
      </h2>

      <div
        className={`w-44 h-44 rounded-full border-[10px] border-blue-500 flex items-center justify-center ${getColor()}`}
      >
        <div className="text-center">
          <p className="text-5xl font-bold">
            {score}
          </p>

          <p className="text-lg font-medium">
            %
          </p>
        </div>
      </div>

      <p className={`mt-6 text-xl font-semibold ${getColor()}`}>
        {getLabel()}
      </p>
    </div>
  );
};

export default ATSScore;