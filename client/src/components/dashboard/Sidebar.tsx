import {
  FiHome,
  FiUser,
  FiSettings,
  FiBriefcase,
} from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-cyan-400">
          InterviewIQ
        </h1>

      </div>

      <nav className="flex-1 p-6 space-y-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          <FiHome />
          Dashboard
        </Link>

        <Link
          to="/interview"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          <FiBriefcase />
          AI Interview
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          <FiUser />
          Profile
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          <FiSettings />
          Settings
        </Link>

      </nav>

    </aside>
  );
}