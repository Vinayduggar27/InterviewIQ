import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";
import ProgressChart from "../../components/dashboard/ProgressChart";
import RecentInterviews from "../../components/dashboard/RecentInterviews";
import QuickActions from "../../components/dashboard/QuickActions";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import AIRecommendations from "../../components/dashboard/AIRecommendations";
export default function Dashboard() {
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
  