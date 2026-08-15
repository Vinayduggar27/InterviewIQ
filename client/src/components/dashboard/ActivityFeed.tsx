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
    <div className="bg-[#151B22] border border-[#2F3D4B] rounded-xl p-6">

      {/* Header */}
      <h2 className="text-xl font-semibold text-white mb-5">
        Recent Activity
      </h2>

      {interviews.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-[#9AA3AD]">
            No activity yet.
          </p>
        </div>
      ) : (
        <div>
          {interviews
            .slice()
            .reverse()
            .slice(0, 5)
            .map((item) => (
              <div
                key={item.id}
                className="border-b border-[#2F3D4B] last:border-b-0 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[#C7CDD4]">
  {item.overallScore !== null ? "Completed" : "Started"}{" "}
  <span className="text-[#6B8FB8] font-medium">
    {item.company}
  </span>{" "}
  Interview
</p>

                  {item.overallScore !== null && (
                    <span className="text-sm text-[#DCE1E6] font-medium whitespace-nowrap">
                      {item.overallScore}%
                    </span>
                  )}
                </div>

                <p className="text-[#9AA3AD] text-sm mt-1">
                  {item.overallScore !== null
  ? "Interview completed successfully"
  : "Interview is still in progress"}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}