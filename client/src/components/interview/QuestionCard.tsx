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
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

      <div className="flex justify-between items-center mb-4">

        <p className="text-cyan-400 font-semibold">
          AI Interviewer
        </p>

        <span className="text-slate-400">
          Question {current} / {total}
        </span>

      </div>

      <h2 className="text-2xl font-bold leading-relaxed">
        {question}
      </h2>

    </div>
  );
}