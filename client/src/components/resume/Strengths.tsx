interface StrengthsProps {
  strengths: string[];
}

export default function Strengths({
  strengths,
}: StrengthsProps) {
  return (
    <div className="h-full rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-7">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
          ✓
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Strengths
          </h2>

          <p className="text-sm text-[#9AA3AD]">
            What's working well in your resume
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-3">

        {strengths.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl border border-[#2F3D4B] bg-[#1D2126] p-4 transition hover:border-[#4F7CAC]"
          >

            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4F7CAC]/15 text-sm text-[#6B8FB8]">
              ✓
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