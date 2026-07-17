import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-2xl font-semibold mb-8">
        Quick Actions
      </h2>

      <div className="flex flex-col gap-5">
        <Button
          className="w-full"
          onClick={() => navigate("/create-interview")}
        >
          Start AI Interview
        </Button>

        <Button
          className="w-full"
          onClick={() => alert("Resume Analyzer coming soon 🚀")}
        >
          Analyze Resume
        </Button>

        <Button
          className="w-full"
          onClick={() => navigate("/dashboard")}
        >
          View Reports
        </Button>
      </div>
    </div>
  );
}