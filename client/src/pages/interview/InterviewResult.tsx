import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const result = state?.result;

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        No Interview Result Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Interview Result 📊
      </h1>

      <div className="bg-slate-900 rounded-2xl p-8 space-y-8">

        <div>
          <p className="text-slate-400">
            Overall Score
          </p>

          <h2 className="text-6xl font-bold text-cyan-400">
            {result.overallScore}/100
          </h2>
        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-3">
            Technical Score
          </h3>

          <p>{result.technicalScore}/100</p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-3">
            Communication Score
          </h3>

          <p>{result.communicationScore}/100</p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-3">
            Confidence Score
          </h3>

          <p>{result.confidenceScore}/100</p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-3">
            Overall Feedback
          </h3>

          <p className="text-slate-300 leading-8">
            {result.feedback}
          </p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Strengths
          </h3>

          <ul className="space-y-2">

            {result.strengths.map((item: string, index: number) => (
              <li key={index}>
                ✅ {item}
              </li>
            ))}

          </ul>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Areas to Improve
          </h3>

          <ul className="space-y-2">

            {result.weaknesses.map((item: string, index: number) => (
              <li key={index}>
                ❌ {item}
              </li>
            ))}

          </ul>

        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}