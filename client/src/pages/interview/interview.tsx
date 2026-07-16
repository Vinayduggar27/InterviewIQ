import InterviewHeader from "../../components/interview/InterviewHeader";
import CameraPreview from "../../components/interview/CameraPreview";
import InterviewTimer from "../../components/interview/InterviewTimer";
import QuestionCard from "../../components/interview/QuestionCard";
import AnswerBox from "../../components/interview/AnswerBox";
import ControlButtons from "../../components/interview/ControlButtons";
import InterviewSidebar from "../../components/interview/InterviewSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInterviewById } from "../../services/interviewservice";
import { useNavigate } from "react-router-dom";
import { evaluateInterview } from "../../services/interviewservice";

export default function Interview() {
  const { id } = useParams();

  const [interview, setInterview] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadInterview = async () => {
      const data = await getInterviewById(id!);
      setInterview(data);
    };

    loadInterview();
  }, [id]);

  const handleNext = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = currentAnswer;

    setAnswers(updatedAnswers);
    setCurrentAnswer("");

    setCurrentQuestion((prev) => prev + 1);
  };

  const handleFinish = async () => {
  const updatedAnswers = [...answers];
  updatedAnswers[currentQuestion] = currentAnswer;
  setAnswers(updatedAnswers);

  try {
    const result = await evaluateInterview(id!, updatedAnswers);

    console.log(result);

    navigate("/result", {
  state: {
    result,
  },
});
  } catch (err) {
    console.error(err);
    alert("Evaluation failed");
  }
};

  if (!interview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <InterviewHeader />

      <div className="grid lg:grid-cols-4 gap-6 p-8">
        <div className="lg:col-span-3 space-y-6">
          <CameraPreview />

          <InterviewTimer />

          <QuestionCard
            question={interview.questions[currentQuestion]}
            current={currentQuestion + 1}
            total={interview.questions.length}
          />

          <AnswerBox
            answer={currentAnswer}
            setAnswer={setCurrentAnswer}
          />

          <ControlButtons
            currentQuestion={currentQuestion}
            totalQuestions={interview.questions.length}
            onNext={handleNext}
            onFinish={handleFinish}
          />
        </div>

        <InterviewSidebar />
      </div>
    </div>
  );
}