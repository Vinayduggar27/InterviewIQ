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
    <div className="bg-[#151B22] border border-[#2F3D4B] rounded-xl p-6 h-[380px]">

      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">
          Performance Trend
        </h2>

        <p className="text-sm text-[#9AA3AD] mt-1">
          Your interview scores over time
        </p>
      </div>

      {data.length === 0 ? (
        <div className="flex items-center justify-center h-[260px] text-[#9AA3AD]">
          Complete interviews to see your progress.
        </div>
      ) : (
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                stroke="#2F3D4B"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="name"
                tick={{
                  fill: "#9AA3AD",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                domain={[0, 100]}
                tick={{
                  fill: "#9AA3AD",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#181E25",
                  border: "1px solid #2F3D4B",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                }}
              />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#4F7CAC"
                strokeWidth={3}
                dot={{
                  fill: "#6B8FB8",
                  stroke: "#4F7CAC",
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                  fill: "#6B8FB8",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

    </div>
  );
}