type ControlButtonsProps = {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onFinish: () => void;
};

export default function ControlButtons({
  currentQuestion,
  totalQuestions,
  onNext,
  onFinish,
}: ControlButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">

      <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
        🎤 Start Recording
      </button>

      {currentQuestion < totalQuestions - 1 ? (
        <button
          onClick={onNext}
          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
        >
          ▶ Next Question
        </button>
      ) : (
        <button
          onClick={onFinish}
          className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition"
        >
          ✅ Finish Interview
        </button>
      )}

      <button className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition">
        ⛔ End Interview
      </button>

    </div>
  );
}