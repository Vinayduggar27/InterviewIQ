import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Interview = {
  id: string;
  company: string;
  overallScore: number | null;
};

type Props = {
  interviews: Interview[];
};

export default function ProgressChart({ interviews }: Props) {
  const data = interviews
    .filter((i) => i.overallScore !== null)
    .map((i, index) => ({
      name: `#${index + 1}`,
      score: i.overallScore,
    }));

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 h-96">
      <h2 className="text-2xl font-semibold mb-6">
        Performance Trend
      </h2>

      {data.length === 0 ? (
        <div className="flex items-center justify-center h-72 text-slate-400">
          Complete interviews to see your progress.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="name" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#06b6d4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}