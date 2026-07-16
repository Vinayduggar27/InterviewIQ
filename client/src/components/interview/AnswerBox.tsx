import { useEffect } from "react";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";

interface AnswerBoxProps {
  answer: string;
  setAnswer: (value: string) => void;
}

export default function AnswerBox({
  answer,
  setAnswer,
}: AnswerBoxProps) {
  const {
    transcript,
    listening,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setAnswer(transcript);
    }
  }, [transcript, setAnswer]);

  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Your Answer
        </h2>

        <button
          onClick={listening ? stopListening : startListening}
          className={`px-4 py-2 rounded-lg ${
            listening
              ? "bg-red-600"
              : "bg-cyan-500"
          }`}
        >
          {listening ? "Stop Mic" : "Start Mic"}
        </button>
      </div>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={8}
        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4"
      />

      <div className="mt-3 text-sm text-slate-400">
        {answer.length} Characters
      </div>
    </div>
  );
}