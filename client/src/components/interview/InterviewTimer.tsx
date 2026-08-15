import { useEffect, useState } from "react";

interface InterviewTimerProps {
  currentQuestion?: number;
  totalQuestions?: number;
}

export default function InterviewTimer({
  currentQuestion = 1,
  totalQuestions = 10,
}: InterviewTimerProps) {
  const [seconds, setSeconds] = useState(1500);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex items-center justify-between rounded-xl border border-[#2F3D4B] bg-[#151B22] px-6 py-5">
      {/* Remaining Time */}
      <div>
        <p className="text-sm text-[#9AA3AD]">
          Remaining Time
        </p>

        <h2 className="mt-1 text-3xl font-bold text-[#6B8FB8]">
          {String(minutes).padStart(2, "0")}:
          {String(secs).padStart(2, "0")}
        </h2>
      </div>

      {/* Question */}
      <div className="text-right">
        <p className="text-sm text-[#9AA3AD]">
          Question
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          {currentQuestion} / {totalQuestions}
        </h2>
      </div>
    </div>
  );
}