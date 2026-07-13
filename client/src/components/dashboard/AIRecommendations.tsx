import { Sparkles } from "lucide-react";

export default function AIRecommendations() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="text-cyan-400" size={22} />
        <h2 className="text-2xl font-bold">AI Coach</h2>
      </div>

      <p className="text-slate-400 mb-6">
        Personalized recommendations based on your recent interviews.
      </p>

      <div className="space-y-3">

        <div className="bg-slate-800 rounded-xl p-3">
          ✅ Focus on Dynamic Programming
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          ✅ Improve HR Communication
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          ✅ Practice Behavioral Questions
        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 transition py-3 font-semibold">
        Start Recommended Interview
      </button>
    </div>
  );
}