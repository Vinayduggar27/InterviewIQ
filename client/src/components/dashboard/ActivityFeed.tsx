export default function ActivityFeed() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>✅ Completed Google Interview</span>
          <span className="text-slate-400">2 min ago</span>
        </div>

        <div className="flex justify-between">
          <span>📄 Resume analyzed</span>
          <span className="text-slate-400">15 min ago</span>
        </div>

        <div className="flex justify-between">
          <span>🤖 AI Feedback generated</span>
          <span className="text-slate-400">Today</span>
        </div>

      </div>
    </div>
  );
}