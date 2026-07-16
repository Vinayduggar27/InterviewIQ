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
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Interview Details 📄
      </h1>

      <div className="bg-slate-900 rounded-xl p-6 mb-8">

        <h2 className="text-2xl font-bold">
          {interview.company}
        </h2>

        <p className="text-slate-400">
          {interview.role}
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-6">

          <div>
            <p className="text-slate-400">Overall</p>
            <h2 className="text-3xl text-cyan-400 font-bold">
              {interview.overallScore ?? "-"}%
            </h2>
          </div>

          <div>
            <p className="text-slate-400">Technical</p>
            <h2>{interview.technicalScore ?? "-"}%</h2>
          </div>

          <div>
            <p className="text-slate-400">Communication</p>
            <h2>{interview.communicationScore ?? "-"}%</h2>
          </div>

          <div>
            <p className="text-slate-400">Confidence</p>
            <h2>{interview.confidenceScore ?? "-"}%</h2>
          </div>

        </div>

      </div>

      <div className="space-y-6">

        {interview.questions?.map((question: string, index: number) => (

          <div
            key={index}
            className="bg-slate-900 rounded-xl p-6"
          >

            <h2 className="font-bold text-cyan-400 mb-3">
              Question {index + 1}
            </h2>

            <p className="mb-6">
              {question}
            </p>

            <h3 className="font-semibold mb-2">
              Your Answer
            </h3>

            <div className="bg-slate-950 p-4 rounded-lg border border-slate-700">

              {interview.answers?.[index] || "No answer"}

            </div>

          </div>

        ))}

      </div>

      <div className="bg-slate-900 rounded-xl p-6 mt-10">

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