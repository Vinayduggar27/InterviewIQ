import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInterviewById } from "../../services/interviewservice";

export default function InterviewDetails() {
  const { id } = useParams();

  const [interview, setInterview] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getInterviewById(id!);
      setInterview(data);
    };

    load();
  }, [id]);

  if (!interview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#12181F] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#12181F] text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Interview Details 📄
      </h1>

      <div className="bg-[#151B22] rounded-xl p-6 mb-8">

        <h2 className="text-2xl font-bold">
          {interview.company}
        </h2>

        <p className="text-[#9AA3AD]">
          {interview.role}
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-5">

          <div>
            <p className="text-[#9AA3AD]">Overall</p>
            <h2 className="text-3xl text-[#6B8FB8] font-bold">
              {interview.overallScore ?? "-"}%
            </h2>
          </div>

          <div>
            <p className="text-[#9AA3AD]">Technical</p>
            <h2>{interview.technicalScore ?? "-"}%</h2>
          </div>

          <div>
            <p className="text-[#9AA3AD]">Communication</p>
            <h2>{interview.communicationScore ?? "-"}%</h2>
          </div>

          <div>
            <p className="text-[#9AA3AD]">Confidence</p>
            <h2>{interview.confidenceScore ?? "-"}%</h2>
          </div>

        </div>

      </div>

      <div className="space-y-6">

        {interview.questions?.map((question: string, index: number) => (

          <div
            key={index}
            className="bg-[#151B22] rounded-xl p-6"
          >

            <h2 className="font-bold text-[#6B8FB8] mb-3">
              Question {index + 1}
            </h2>

            <p className="mb-6">
              {question}
            </p>

            <h3 className="font-semibold mb-2">
              Your Answer
            </h3>

            <div className="bg-[#12181F] p-4 rounded-lg border border-[#2F3D4B]">

              {interview.answers?.[index] || "No answer"}

            </div>

          </div>

        ))}

      </div>

      <div className="bg-[#151B22] rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-bold mb-4">
          AI Feedback
        </h2>

        <p>
          {interview.feedback}
        </p>

      </div>

    </div>
  );
}