import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        <Link to="/interview">
          <Button className="w-full">
            Start AI Interview
          </Button>
        </Link>

        <Button className="w-full">
          + Create Interview
        </Button>

        <Button className="w-full">
          Analyze Resume
        </Button>

        <Button className="w-full">
          View Reports
        </Button>

      </div>
    </div>
  );
}