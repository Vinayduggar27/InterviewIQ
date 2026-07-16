type Interview = {
  overallScore: number | null;
};

type Props = {
  interviews: Interview[];
};

export default function AIRecommendations({
  interviews,
}: Props) {
  const average =
    interviews.length === 0
      ? 0
      : interviews.reduce(
          (sum, i) => sum + (i.overallScore ?? 0),
          0
        ) / interviews.length;

  let recommendation =
    "Keep practicing consistently.";

  if (average >= 90)
    recommendation =
      "Excellent work! Start preparing for FAANG-level interviews.";

  else if (average >= 75)
    recommendation =
      "Good progress. Focus on DSA and System Design.";

  else if (average > 0)
    recommendation =
      "Spend more time strengthening core CS fundamentals.";

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-2xl font-semibold mb-6">
        AI Recommendation
      </h2>

      <p className="text-slate-300 leading-7">
        {recommendation}
      </p>
    </div>
  );
}