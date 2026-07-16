type Interview = {
  id: string;
  company: string;
  role: string;
  overallScore: number | null;
  createdAt: string;
};

type Props = {
  interviews: Interview[];
};

export default function ActivityFeed({ interviews }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Recent Activity
      </h2>

      {interviews.length === 0 ? (
        <p className="text-slate-400">
          No activity yet.
        </p>
      ) : (
        interviews
          .slice()
          .reverse()
          .slice(0, 5)
          .map((item) => (
            <div
              key={item.id}
              className="border-b border-slate-800 py-4"
            >
              <p>
                Completed{" "}
                <span className="text-cyan-400">
                  {item.company}
                </span>{" "}
                Interview
              </p>

              <p className="text-slate-400 text-sm">
                Score: {item.overallScore ?? "-"}%
              </p>
            </div>
          ))
      )}
    </div>
  );
}