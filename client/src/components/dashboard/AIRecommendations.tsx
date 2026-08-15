type Interview = {
  overallScore: number | null;
};

type Props = {
  interviews: Interview[];
};

export default function AIRecommendations({
  interviews,
}: Props) {
  const completedInterviews = interviews.filter(
    (i) => i.overallScore !== null
  );

  const average =
    completedInterviews.length === 0
      ? 0
      : completedInterviews.reduce(
          (sum, i) => sum + (i.overallScore ?? 0),
          0
        ) / completedInterviews.length;

  let recommendation = "Keep practicing consistently.";

  if (average >= 90) {
    recommendation =
      "Excellent work! Start preparing for FAANG-level interviews.";
  } else if (average >= 75) {
    recommendation =
      "Good progress. Focus on DSA and System Design.";
  } else if (average > 0) {
    recommendation =
      "Spend more time strengthening core CS fundamentals.";
  }

  return (
    <div className="bg-[#151B22] border border-[#2F3D4B] rounded-xl p-6 min-h-[360px]">

      {/* Header */}
      <div className="flex items-center gap-4">

        <div className="
          w-10
          h-10
          rounded-lg
          bg-[#4F7CAC]
          flex
          items-center
          justify-center
          text-white
          font-bold
        ">
          AI
        </div>

        <h2 className="text-xl font-semibold text-white">
          AI Recommendation
        </h2>

      </div>

      {/* Recommendation */}
      <p className="text-[#DCE1E6] leading-7 mt-8">
        {recommendation}
      </p>

      {/* Divider */}
      <div className="border-t border-[#2F3D4B] my-7" />

      {/* Average */}
      <div>

        <p className="text-sm text-[#9AA3AD]">
          Current Average
        </p>

        <p className="text-3xl font-bold text-[#6B8FB8] mt-3">
          {Math.round(average)}%
        </p>

      </div>

    </div>
  );
}