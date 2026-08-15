import { useEffect, useRef, useState } from "react";

type AnswerBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onTranscriptUpdate?: (text: string) => void;
};

export default function AnswerBox({
  value,
  onChange,
  onTranscriptUpdate,
}: AnswerBoxProps) {
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<any>(null);
  const valueRef = useRef(value);

  // Always keep latest answer
  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript += event.results[i][0].transcript;
      }

      if (transcript.trim()) {
        const newAnswer = `${valueRef.current} ${transcript}`.trim();

        valueRef.current = newAnswer;

        onChange(newAnswer);
        onTranscriptUpdate?.(transcript);
      }
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    // IMPORTANT:
    // Stop microphone when this question/component changes
    return () => {
      try {
        recognition.stop();
      } catch {
        // Recognition may already be stopped
      }

      recognitionRef.current = null;
      setIsListening(false);
    };
  }, [onChange, onTranscriptUpdate]);

  const startListening = () => {
    const recognition = recognitionRef.current;

    if (!recognition) return;

    try {
      recognition.start();
    } catch (error) {
      console.log("Recognition already started or unavailable:", error);
    }
  };

  const stopListening = () => {
    const recognition = recognitionRef.current;

    if (!recognition) return;

    try {
      recognition.stop();
    } catch {
      // Already stopped
    }

    setIsListening(false);
  };

  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(e) => {
          valueRef.current = e.target.value;
          onChange(e.target.value);
        }}
        placeholder="Type your answer or use the microphone..."
        className="min-h-[180px] w-full resize-none rounded-xl border border-[#2F3D4B] bg-[#151B22] p-4 text-white outline-none transition focus:border-[#4F7CAC]"
      />

      <div className="mt-4 flex justify-end">
        {!isListening ? (
          <button
            type="button"
            onClick={startListening}
            className="rounded-xl bg-[#4F7CAC] px-5 py-3 font-semibold text-white transition hover:bg-[#3F6790]"
          >
            🎙️ Start Mic
          </button>
        ) : (
          <button
            type="button"
            onClick={stopListening}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            🛑 Stop Mic
          </button>
        )}
      </div>
    </div>
  );
}