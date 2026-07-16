import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInterview, generateQuestions } from "../../services/interviewservice";

export default function CreateInterview() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState(0);
  const [techStack, setTechStack] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!role || !company || !techStack) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const interview = await createInterview({
        role,
        company,
        experience,
        techStack,
      });

      await generateQuestions(interview.id);

      navigate(`/interview/${interview.id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to create interview");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="bg-slate-900 w-full max-w-xl rounded-3xl p-8 border border-slate-800">

        <h1 className="text-3xl font-bold text-white mb-2">
          Start AI Interview
        </h1>

        <p className="text-slate-400 mb-8">
          Tell us about the interview you want to practice.
        </p>

        <div className="space-y-5">

          <input
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
            placeholder="Job Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            type="number"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
            placeholder="Years of Experience"
            value={experience}
            onChange={(e) => setExperience(Number(e.target.value))}
          />

          <input
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
            placeholder="Tech Stack (React, Node, Java...)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />

          <button
            onClick={handleCreate}
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl p-4 text-black font-bold"
          >
            {loading ? "Generating AI Questions..." : "Start Interview"}
          </button>

        </div>

      </div>

    </div>
  );
}