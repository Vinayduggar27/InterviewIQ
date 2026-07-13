export default function InterviewHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-white">
            AI Technical Interview
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            Practice with an AI interviewer in real time.
          </p>
        </div>

        <div className="flex gap-3">

          <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
            ● Connected
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400">
            AI Ready
          </span>

        </div>

      </div>
    </header>
  );
}