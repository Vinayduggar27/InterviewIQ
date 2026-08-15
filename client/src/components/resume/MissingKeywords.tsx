interface MissingKeywordsProps {
  keywords: string[];
}

export default function MissingKeywords({
  keywords,
}: MissingKeywordsProps) {
  return (
    <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-7">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
          #
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Missing Keywords
          </h2>

          <p className="text-sm text-[#9AA3AD]">
            Skills that could improve your ATS score
          </p>
        </div>

      </div>

      {keywords.length === 0 ? (

        <div className="mt-6 rounded-xl border border-[#2F3D4B] bg-[#1D2126] p-5 text-center">
          <p className="text-sm text-[#9AA3AD]">
            No important keywords are missing.
          </p>
        </div>

      ) : (

        <div className="mt-6 flex flex-wrap gap-3">

          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="rounded-xl border border-[#2F3D4B] bg-[#1D2126] px-4 py-2 text-sm text-[#C7CDD4] transition hover:border-[#4F7CAC] hover:text-[#6B8FB8]"
            >
              {keyword}
            </span>
          ))}

        </div>

      )}

    </div>
  );
}