import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const result = state?.result;

  if (!result) {
    return (
      <div className="min-h-screen bg-[#12181F] text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-8 text-center">
          <h1 className="text-2xl font-bold text-white">
            No Interview Result Found
          </h1>

          <p className="mt-3 text-[#9AA3AD]">
            The interview result is unavailable or the session has expired.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-6 rounded-xl bg-[#4F7CAC] px-6 py-3 font-semibold text-white transition hover:bg-[#3F6790]"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#12181F] text-white">
      {/* Header */}
      <header className="border-b border-[#2F3D4B] px-6 py-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-[#6B8FB8]">
            InterviewIQ
          </p>

          <h1 className="mt-1 text-3xl font-bold text-white lg:text-4xl">
            Interview Result
          </h1>

          <p className="mt-2 text-[#9AA3AD]">
            Here's your AI-powered interview performance analysis.
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">

        {/* Overall Score */}
        <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-8">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <p className="text-sm text-[#9AA3AD]">
                Overall Score
              </p>

              <div className="mt-2 flex items-end gap-2">
                <h2 className="text-6xl font-bold text-[#6B8FB8]">
                  {result.overallScore}
                </h2>

                <span className="mb-2 text-xl text-[#9AA3AD]">
                  /100
                </span>
              </div>

              <p className="mt-3 text-[#C7CDD4]">
                Your overall interview performance
              </p>
            </div>

            {/* Score Circle */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-[#4F7CAC]/30">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">
                  {result.overallScore}
                </p>

                <p className="text-xs text-[#9AA3AD]">
                  SCORE
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Score Breakdown */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Technical */}
          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">
            <p className="text-sm text-[#9AA3AD]">
              Technical Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              {result.technicalScore}
              <span className="text-lg text-[#9AA3AD]">
                /100
              </span>
            </h3>

            <div className="mt-5 h-2 rounded-full bg-[#181E25]">
              <div
                className="h-2 rounded-full bg-[#4F7CAC]"
                style={{
                  width: `${result.technicalScore}%`,
                }}
              />
            </div>
          </div>

          {/* Communication */}
          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">
            <p className="text-sm text-[#9AA3AD]">
              Communication Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              {result.communicationScore}
              <span className="text-lg text-[#9AA3AD]">
                /100
              </span>
            </h3>

            <div className="mt-5 h-2 rounded-full bg-[#181E25]">
              <div
                className="h-2 rounded-full bg-[#6B8FB8]"
                style={{
                  width: `${result.communicationScore}%`,
                }}
              />
            </div>
          </div>

          {/* Confidence */}
          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">
            <p className="text-sm text-[#9AA3AD]">
              Confidence Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              {result.confidenceScore}
              <span className="text-lg text-[#9AA3AD]">
                /100
              </span>
            </h3>

            <div className="mt-5 h-2 rounded-full bg-[#181E25]">
              <div
                className="h-2 rounded-full bg-[#4F7CAC]"
                style={{
                  width: `${result.confidenceScore}%`,
                }}
              />
            </div>
          </div>

        </div>

        {/* Feedback */}
        <div className="mt-6 rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-8">

          <h2 className="text-2xl font-semibold text-white">
            Overall Feedback
          </h2>

          <p className="mt-5 leading-8 text-[#C7CDD4]">
            {result.feedback}
          </p>

        </div>

        {/* Strengths + Improvements */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Strengths */}
          <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-8">

            <h2 className="text-2xl font-semibold text-white">
              Strengths
            </h2>

            <div className="mt-6 space-y-4">

              {result.strengths.map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-xl bg-[#181E25] p-4"
                  >
                    <span className="text-[#6B8FB8]">
                      ✓
                    </span>

                    <p className="text-[#C7CDD4]">
                      {item}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

          {/* Areas to Improve */}
          <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-8">

            <h2 className="text-2xl font-semibold text-white">
              Areas to Improve
            </h2>

            <div className="mt-6 space-y-4">

              {result.weaknesses.map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-xl bg-[#181E25] p-4"
                  >
                    <span className="text-[#9AA3AD]">
                      →
                    </span>

                    <p className="text-[#C7CDD4]">
                      {item}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl bg-[#4F7CAC] px-7 py-3 font-semibold text-white transition hover:bg-[#3F6790]"
          >
            ← Back to Dashboard
          </button>

          <button
            onClick={() => navigate("/create-interview")}
            className="rounded-xl border border-[#2F3D4B] bg-[#151B22] px-7 py-3 font-semibold text-white transition hover:bg-[#181E25] hover:border-[#4F7CAC]"
          >
            Take Another Interview
          </button>

        </div>

      </main>
    </div>
  );
}