interface SuggestionsProps {
  suggestions: string[];
}

export default function Suggestions({
  suggestions,
}: SuggestionsProps) {
  return (
    <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-7">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
            ✦
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              AI Recommendations
            </h2>

            <p className="text-sm text-[#9AA3AD]">
              Personalized ways to improve your resume
            </p>
          </div>

        </div>

        <span className="hidden rounded-full border border-[#2F3D4B] bg-[#1D2126] px-3 py-1 text-xs text-[#6B8FB8] sm:block">
          AI Powered
        </span>

      </div>

      {/* Suggestions */}
      <div className="mt-6 space-y-3">

        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-[#2F3D4B] bg-[#1D2126] p-4 transition hover:border-[#4F7CAC]"
          >

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#4F7CAC]/15 text-sm font-semibold text-[#6B8FB8]">
              {index + 1}
            </span>

            <p className="text-sm leading-6 text-[#C7CDD4]">
              {item}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}