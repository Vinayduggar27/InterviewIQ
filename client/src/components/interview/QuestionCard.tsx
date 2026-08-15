type QuestionCardProps = {
  question: string;
  current: number;
  total: number;
};

export default function QuestionCard({
  question,
  current,
  total,
}: QuestionCardProps) {
  return (
    <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <p className="font-semibold text-[#6B8FB8]">
          AI Interviewer
        </p>

        <span className="rounded-full border border-[#2F3D4B] bg-[#12181F] px-3 py-1 text-sm text-[#9AA3AD]">
          Question {current} / {total}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold leading-relaxed text-white">
        {question}
      </h2>
    </div>
  );
}