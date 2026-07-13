import {
  FiBell,
  FiSearch,
} from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 px-8 flex items-center justify-between">

      <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl">

        <FiSearch />

        <input
          placeholder="Search..."
          className="bg-transparent outline-none"
        />

      </div>

      <div className="flex items-center gap-5">

        <FiBell
          size={22}
          className="cursor-pointer"
        />

        <div className="w-11 h-11 rounded-full bg-cyan-500"></div>

      </div>

    </header>
  );
}