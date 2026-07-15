import { useEffect, useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";
import ProgressChart from "../../components/dashboard/ProgressChart";
import RecentInterviews from "../../components/dashboard/RecentInterviews";
import QuickActions from "../../components/dashboard/QuickActions";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import AIRecommendations from "../../components/dashboard/AIRecommendations";

import { getInterviews } from "../../services/interviewservice";

export default function Dashboard() {
  const [interviews, setInterviews] = useState<any[]>([]);

  useEffect(() => {
    const loadInterviews = async () => {
      try {
        const data = await getInterviews();
        setInterviews(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadInterviews();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Here's your interview performance.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <StatCard title="Interviews" value="28" />
            <StatCard title="Average Score" value="89%" />
            <StatCard title="Resume Score" value="92%" />
            <StatCard title="Current Streak" value="12 Days" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            <div className="lg:col-span-2">
              <ProgressChart />
            </div>

            <QuickActions />
          </div>

          {/* TEMPORARY LIVE INTERVIEWS */}
          <div className="bg-slate-900 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">
              My Interviews
            </h2>

            {interviews.length === 0 ? (
              <p className="text-slate-400">
                No interviews yet.
              </p>
            ) : (
              interviews.map((interview) => (
                <div
                  key={interview.id}
                  className="border-b border-slate-700 py-3"
                >
                  <h3 className="font-semibold">
                    {interview.role}
                  </h3>

                  <p className="text-slate-400">
                    {interview.company}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <RecentInterviews />
              <ActivityFeed />
            </div>

            <AIRecommendations />
          </div>
        </div>
      </main>
    </div>
  );
}