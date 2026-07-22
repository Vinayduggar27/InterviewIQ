import {
  FiHome,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    name: "AI Interview",
    path: "/create-interview",
    icon: FiBriefcase,
  },
  {
    name: "Analyze Resume",
    path: "/resume",
    icon: FiFileText,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FiUser,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">
          InterviewIQ
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-500">
          InterviewIQ v1.0
        </p>
      </div>

    </aside>
  );
}