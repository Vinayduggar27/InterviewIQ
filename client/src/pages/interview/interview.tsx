import InterviewHeader from "../../components/interview/InterviewHeader";
import CameraPreview from "../../components/interview/CameraPreview";
import InterviewTimer from "../../components/interview/InterviewTimer";
import QuestionCard from "../../components/interview/QuestionCard";
import AnswerBox from "../../components/interview/AnswerBox";
import ControlButtons from "../../components/interview/ControlButtons";
import InterviewSidebar from "../../components/interview/InterviewSidebar";

export default function Interview() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <InterviewHeader />

      <div className="grid lg:grid-cols-4 gap-6 p-8">

        <div className="lg:col-span-3 space-y-6">

          <CameraPreview />

          <InterviewTimer />

          <QuestionCard />

          <AnswerBox />

          <ControlButtons />

        </div>

        <InterviewSidebar />

      </div>

    </div>
  );
}