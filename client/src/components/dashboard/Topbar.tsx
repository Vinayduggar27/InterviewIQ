export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8">

      <input
        placeholder="Search..."
        className="bg-slate-900 rounded-xl px-4 py-2 w-80 outline-none"
      />

      <div className="flex items-center gap-4">

        <button className="bg-cyan-500 px-4 py-2 rounded-lg">
          New Interview
        </button>

        <div className="w-11 h-11 rounded-full bg-cyan-500"></div>

      </div>

    </header>
  );
}