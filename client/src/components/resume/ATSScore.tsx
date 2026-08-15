interface ATSScoreProps {
  score: number;
}

export default function ATSScore({ score }: ATSScoreProps) {
  const getLabel = () => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Needs Improvement";
    return "Poor";
  };

  return (
    <div className="h-full rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-7">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-[#9AA3AD]">
            Resume Score
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            ATS Compatibility
          </h2>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
          📊
        </div>

      </div>

      {/* Score */}
      <div className="mt-8 flex flex-col items-center">

        <div className="relative flex h-44 w-44 items-center justify-center">

          <svg
            className="absolute h-full w-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#1D2126"
              strokeWidth="8"
            />

            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#4F7CAC"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${score * 2.64} 264`}
            />
          </svg>

          <div className="text-center">

            <p className="text-4xl font-bold text-white">
              {score}%
            </p>

            <p className="mt-1 text-sm text-[#6B8FB8]">
              {getLabel()}
            </p>

          </div>

        </div>

      </div>

      {/* Bottom information */}
      <div className="mt-8 border-t border-[#2F3D4B] pt-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-[#9AA3AD]">
            Resume Quality
          </span>

          <span className="font-semibold text-[#C7CDD4]">
            {score}/100
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#1D2126]">

          <div
            className="h-full rounded-full bg-[#4F7CAC] transition-all duration-700"
            style={{ width: `${score}%` }}
          />

        </div>

      </div>

    </div>
  );
}