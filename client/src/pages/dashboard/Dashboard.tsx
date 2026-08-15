import { useEffect, useState } from "react";

import { getDashboardStats } from "../../services/dashboardservice";
import { getInterviews } from "../../services/interviewservice";

import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";
import ProgressChart from "../../components/dashboard/ProgressChart";
import RecentInterviews from "../../components/dashboard/RecentInterviews";
import QuickActions from "../../components/dashboard/QuickActions";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import AIRecommendations from "../../components/dashboard/AIRecommendations";

export default function Dashboard() {
  const [interviews, setInterviews] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const interviewData = await getInterviews();
        setInterviews(interviewData);

        const dashboardData = await getDashboardStats();
        setStats(dashboardData);
      } catch (err) {
        console.error("Dashboard loading error:", err);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#12181F] text-white flex">

      {/* ================= SIDEBAR ================= */}
      <Sidebar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 min-w-0">

        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="p-6 lg:p-7">

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            <StatCard
              title="Interviews"
              value={`${stats?.totalInterviews ?? 0}`}
            />

            <StatCard
              title="Average Score"
              value={`${stats?.averageScore ?? 0}%`}
            />

            <StatCard
              title="Highest Score"
              value={`${stats?.highestScore ?? 0}%`}
            />

            <StatCard
              title="Completed"
              value={`${
                interviews.filter(
                  (i) => i.overallScore !== null
                ).length
              }`}
            />

          </div>

          {/* ================= CHART + QUICK ACTIONS ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">

            <div className="xl:col-span-2">
              <ProgressChart interviews={interviews} />
            </div>

            <QuickActions />

          </div>

          {/* ================= RECENT INTERVIEWS + AI ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">

            <div className="xl:col-span-2">
              <RecentInterviews interviews={interviews} />
            </div>

            <AIRecommendations interviews={interviews} />

          </div>

          {/* ================= ACTIVITY ================= */}
          <div className="mt-5">
            <ActivityFeed interviews={interviews} />
          </div>

        </div>
      </main>
    </div>
  );
}