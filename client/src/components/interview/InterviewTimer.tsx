import { useEffect, useState } from "react";

export default function InterviewTimer() {
  const [seconds, setSeconds] = useState(1500);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="bg-slate-900 rounded-xl p-5 flex justify-between">

      <div>

        <p className="text-slate-400">
          Remaining Time
        </p>

        <h2 className="text-4xl font-bold text-cyan-400">

          {String(minutes).padStart(2, "0")}:
          {String(secs).padStart(2, "0")}

        </h2>

      </div>

      <div>

        <p className="text-slate-400">
          Question
        </p>

        <h2 className="text-3xl font-bold">
          1 / 10
        </h2>

      </div>

    </div>
  );
}