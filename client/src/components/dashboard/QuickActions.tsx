import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/interview")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 rounded-xl transition"
        >
          Start AI Interview
        </button>

        <button
          onClick={() => navigate("/resume")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 rounded-xl transition"
        >
          Analyze Resume
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 rounded-xl transition"
        >
          View Reports
        </button>
      </div>
    </div>
  );
}