interface InterviewSidebarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function InterviewSidebar({
  currentQuestion,
  totalQuestions,
}: InterviewSidebarProps) {
  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Interview Progress */}
      <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-5">
        <h2 className="mb-5 text-xl font-semibold text-white">
          Interview Progress
        </h2>

        {/* Progress Bar */}
        <div className="h-3 w-full overflow-hidden rounded-full bg-[#181E25]">
          <div
            className="h-full rounded-full bg-[#4F7CAC] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-[#9AA3AD]">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>

      {/* Interview Tips */}
      <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-5">
        <h2 className="mb-5 text-xl font-semibold text-white">
          Interview Tips
        </h2>

        <ul className="space-y-4 text-sm text-[#9AA3AD]">
          <li className="flex gap-3">
            <span className="text-[#6B8FB8]">✓</span>
            <span>Speak clearly.</span>
          </li>

          <li className="flex gap-3">
            <span className="text-[#6B8FB8]">✓</span>
            <span>Maintain eye contact.</span>
          </li>

          <li className="flex gap-3">
            <span className="text-[#6B8FB8]">✓</span>
            <span>Give structured answers.</span>
          </li>

          <li className="flex gap-3">
            <span className="text-[#6B8FB8]">✓</span>
            <span>Think before answering.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}