import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import InterviewHeader from "../../components/interview/InterviewHeader";
import CameraPreview from "../../components/interview/CameraPreview";
import InterviewTimer from "../../components/interview/InterviewTimer";
import QuestionCard from "../../components/interview/QuestionCard";
import AnswerBox from "../../components/interview/AnswerBox";
import ControlButtons from "../../components/interview/ControlButtons";
import InterviewSidebar from "../../components/interview/InterviewSidebar";

import {
  getInterviewById,
  evaluateInterview,
} from "../../services/interviewservice";

type InterviewData = {
  id: string;
  questions: string[];
};

export default function Interview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [interview, setInterview] =
    useState<InterviewData | null>(null);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] =
    useState<string[]>([]);

  const [currentAnswer, setCurrentAnswer] =
    useState("");

  const [isScrolled, setIsScrolled] =
    useState(false);

  /* =========================
     LOAD INTERVIEW
  ========================== */

  useEffect(() => {
    const loadInterview = async () => {
      try {
        if (!id) return;

        const data = await getInterviewById(id);

        setInterview(data);

        setAnswers(
          new Array(data.questions.length).fill("")
        );
      } catch (error) {
        console.error(
          "Failed to load interview:",
          error
        );
      }
    };

    loadInterview();
  }, [id]);

  /* =========================
     SCROLL DETECTION
  ========================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================
     NEXT QUESTION
  ========================== */
const handleNext = () => {
  if (!interview) return;

  // Don't go beyond the last question
  if (currentQuestion >= interview.questions.length - 1) {
    return;
  }

  // Save the current answer
  const updatedAnswers = [...answers];

  updatedAnswers[currentQuestion] = currentAnswer;

  setAnswers(updatedAnswers);

  // Move to next question
  const nextQuestion = currentQuestion + 1;

  setCurrentQuestion(nextQuestion);

  // Load the answer for the next question
  setCurrentAnswer(updatedAnswers[nextQuestion] || "");
};
  
  

  /* =========================
     PREVIOUS QUESTION
  ========================== */

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] =
      currentAnswer;

    setAnswers(updatedAnswers);

    const previousQuestion =
      currentQuestion - 1;

    setCurrentQuestion(previousQuestion);

    setCurrentAnswer(
      updatedAnswers[previousQuestion] || ""
    );
  };

  /* =========================
     FINISH INTERVIEW
  ========================== */

  const handleFinish = async () => {
    if (!id || !interview) return;

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] =
      currentAnswer;

    setAnswers(updatedAnswers);

    try {
      const result = await evaluateInterview(
        id,
        updatedAnswers
      );

      navigate("/result", {
        state: {
          result,
        },
      });
    } catch (error) {
      console.error(
        "Evaluation failed:",
        error
      );

      alert(
        "Evaluation failed. Please try again."
      );
    }
  };

  /* =========================
     LOADING
  ========================== */

  if (!interview) {
    return (
      <div className="min-h-screen bg-[#12181F] text-white flex items-center justify-center">
        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#2F3D4B] border-t-[#4F7CAC]" />

          <p className="text-[#9AA3AD]">
            Loading interview...
          </p>

        </div>
      </div>
    );
  }

  const totalQuestions =
    interview.questions.length;

  return (
    <div className="min-h-screen bg-[#12181F] text-white">

      {/* =========================
          HEADER
      ========================== */}

      <InterviewHeader />

      {/* =========================
          INTERVIEW WORKSPACE
      ========================== */}

      <div className="p-6 lg:p-8">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ==================================
              LEFT — QUESTIONS / ANSWERS
          =================================== */}

          <div className="space-y-6 lg:col-span-2">

            {/* Timer */}
            <InterviewTimer
              currentQuestion={
                currentQuestion + 1
              }
              totalQuestions={
                totalQuestions
              }
            />

            {/* Question */}
            <QuestionCard
              question={
                interview.questions[
                  currentQuestion
                ]
              }
              current={
                currentQuestion + 1
              }
              total={
                totalQuestions
              }
            />

            {/* Answer */}
            <AnswerBox
  key={currentQuestion}
  value={currentAnswer}
  onChange={setCurrentAnswer}
/>

            {/* Controls */}
            <ControlButtons
              currentQuestion={
                currentQuestion
              }
              totalQuestions={
                totalQuestions
              }
              onNext={handleNext}
              onPrevious={
                handlePrevious
              }
              onFinish={handleFinish}
            />

          </div>

          {/* ==================================
              RIGHT — CAMERA + PROGRESS
          =================================== */}

          <div className="lg:col-span-1">

            <div className="lg:sticky lg:top-6">

              {/* Camera */}
              <div
                className={`
                  transition-all
                  duration-500
                  ease-in-out
                  ${
                    isScrolled
                      ? "scale-[0.72] origin-top-right"
                      : "scale-100"
                  }
                `}
              >

                <CameraPreview />

              </div>

              {/* Progress + Tips */}
              <div
                className={`
                  mt-5
                  transition-all
                  duration-500
                  ${
                    isScrolled
                      ? "-mt-24"
                      : "mt-5"
                  }
                `}
              >

                <InterviewSidebar
                  currentQuestion={
                    currentQuestion
                  }
                  totalQuestions={
                    totalQuestions
                  }
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}