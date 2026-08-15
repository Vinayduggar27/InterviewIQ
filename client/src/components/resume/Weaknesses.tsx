interface WeaknessesProps {
  weaknesses: string[];
}

export default function Weaknesses({
  weaknesses,
}: WeaknessesProps) {
  return (
    <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-7">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
          !
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Areas to Improve
          </h2>

          <p className="text-sm text-[#9AA3AD]">
            Things you can strengthen
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-3">

        {weaknesses.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#2F3D4B] bg-[#1D2126] p-4"
          >

            <div className="flex items-start gap-3">

              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm text-red-400">
                !
              </span>

              <p className="text-sm leading-6 text-[#C7CDD4]">
                {item}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}