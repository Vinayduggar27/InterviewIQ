import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-8">

      <h1 className="text-3xl font-bold text-cyan-400">
        InterviewIQ
      </h1>

      <nav className="space-y-3 mt-12">

        <Link
          to="/dashboard"
          className="block hover:text-cyan-400"
        >
          Dashboard
        </Link>

        <Link
          to="/interview"
          className="block hover:text-cyan-400"
        >
          AI Interview
        </Link>

        <Link
          to="/profile"
          className="block hover:text-cyan-400"
        >
          Profile
        </Link>

      </nav>

    </aside>
  );
}