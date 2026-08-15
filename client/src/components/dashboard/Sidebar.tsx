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
    <aside className="hidden lg:flex w-72 min-h-screen bg-[#10151C] border-r border-[#2F3D4B] flex-col">

      {/* Logo */}
      <div className="h-24 flex items-center px-8 border-b border-[#2F3D4B]">
        <h1 className="text-3xl font-extrabold text-[#6B8FB8] tracking-wide">
          InterviewIQ
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-7 space-y-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#4F7CAC] text-white"
                    : "text-[#C7CDD4] hover:bg-[#181E25] hover:text-white"
                }`
              }
            >
              <Icon size={21} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Logout / Footer */}
      <div className="px-5 py-6 border-t border-[#2F3D4B]">
        <button
          className="w-full text-left px-5 py-3 text-[#9AA3AD] hover:text-white transition"
        >
          Logout
        </button>
      </div>

    </aside>
  );
}