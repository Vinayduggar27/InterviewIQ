export default function InterviewHeader() {
  return (
    <header className="border-b border-[#2F3D4B] bg-[#12181F] px-8 py-5">
      <div className="flex items-center justify-between">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            AI Technical Interview
          </h1>

          <p className="mt-1 text-sm text-[#9AA3AD]">
            Practice with an AI interviewer in real time.
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#2F3D4B] bg-[#151B22] px-4 py-2 text-sm text-[#9AA3AD]">
            <span className="mr-2 text-[#6B8FB8]">●</span>
            Connected
          </span>

          <span className="rounded-full border border-[#4F7CAC] bg-[#4F7CAC]/20 px-4 py-2 text-sm text-[#6B8FB8]">
            AI Ready
          </span>
        </div>
      </div>
    </header>
  );
}