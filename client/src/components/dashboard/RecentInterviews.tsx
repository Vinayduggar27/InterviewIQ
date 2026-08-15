import { Link } from "react-router-dom";

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

export default function RecentInterviews({ interviews }: Props) {
  return (
    <div className="bg-[#151B22] border border-[#2F3D4B] rounded-xl p-6 min-h-[360px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Interviews
        </h2>

        <span className="text-sm text-[#9AA3AD]">
          Latest 5
        </span>
      </div>

      {interviews.length === 0 ? (
        <div className="flex items-center justify-center h-56">
          <p className="text-[#9AA3AD]">
            No interviews yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-[#2F3D4B] text-left">

                <th className="pb-4 text-xs font-medium text-[#9AA3AD] uppercase">
                  Company
                </th>

                <th className="pb-4 text-xs font-medium text-[#9AA3AD] uppercase">
                  Role
                </th>

                <th className="pb-4 text-xs font-medium text-[#9AA3AD] uppercase">
                  Score
                </th>

                <th className="pb-4 text-xs font-medium text-[#9AA3AD] uppercase">
                  Date
                </th>

              </tr>
            </thead>

            <tbody>

              {interviews.slice(0, 5).map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b border-[#2F3D4B]
                    last:border-b-0
                    hover:bg-[#181E25]
                    transition
                  "
                >

                  <td className="py-4">

                    <Link
                      to={`/interview/details/${item.id}`}
                      className="
                        text-[#6B8FB8]
                        hover:text-[#8BA8C7]
                        transition
                        font-medium
                      "
                    >
                      {item.company}
                    </Link>

                  </td>

                  <td className="py-4 text-[#DCE1E6]">
                    {item.role}
                  </td>

                  <td className="py-4">

                    {item.overallScore !== null ? (
                      <span className="text-white font-medium">
                        {item.overallScore}%
                      </span>
                    ) : (
                      <span className="text-[#9AA3AD]">
                        Pending
                      </span>
                    )}

                  </td>

                  <td className="py-4 text-[#9AA3AD]">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}
    </div>
  );
}