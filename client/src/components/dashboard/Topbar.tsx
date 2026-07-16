import { useEffect, useState } from "react";
import {
  FiBell,
  FiSearch,
} from "react-icons/fi";

export default function Topbar() {

  const userName =
  localStorage.getItem("userName") || "Developer";

const [greeting, setGreeting] = useState("");

const updateGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    setGreeting("Good Morning");
  } else if (hour >= 12 && hour < 17) {
    setGreeting("Good Afternoon");
  } else if (hour >= 17 && hour < 22) {
    setGreeting("Good Evening");
  } else {
    setGreeting("Good Night");
  }
};

useEffect(() => {
  updateGreeting();

  const interval = setInterval(updateGreeting, 60000);

  return () => clearInterval(interval);
}, []);

  return (
    <header className="h-20 border-b border-slate-800 px-8 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold">
          {greeting}, {userName} 👋
        </h2>

        <p className="text-slate-400 text-sm">
          Ready to ace your next interview?
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl">

          <FiSearch />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <FiBell
          size={22}
          className="cursor-pointer"
        />

        <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
          {userName.charAt(0).toUpperCase()}
        </div>

      </div>

    </header>
  );
}