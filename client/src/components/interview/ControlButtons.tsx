type ControlButtonsProps = {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
  onFinish: () => void;
};

export default function ControlButtons({
  currentQuestion,
  totalQuestions,
  onNext,
  onPrevious,
  onFinish,
}: ControlButtonsProps) {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion >= totalQuestions - 1;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#2F3D4B] bg-[#151B22] p-5">
      {/* Back / Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className={`rounded-xl border px-6 py-3 font-semibold transition ${
          isFirstQuestion
            ? "cursor-not-allowed border-[#2F3D4B] bg-[#181E25] text-[#56616D]"
            : "border-[#2F3D4B] bg-[#12181F] text-white hover:border-[#4F7CAC] hover:bg-[#1D2126]"
        }`}
      >
        ← Previous
      </button>

      {/* Next / Finish */}
      <div className="flex items-center gap-3">
        {!isLastQuestion ? (
          <button
            type="button"
            onClick={onNext}
            className="rounded-xl bg-[#4F7CAC] px-6 py-3 font-semibold text-white transition hover:bg-[#3F6790]"
          >
            Next Question →
          </button>
        ) : (
          <button
            type="button"
            onClick={onFinish}
            className="rounded-xl bg-[#4F7CAC] px-6 py-3 font-semibold text-white transition hover:bg-[#3F6790]"
          >
            Finish Interview ✓
          </button>
        )}
      </div>
    </div>
  );
}