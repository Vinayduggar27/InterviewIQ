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
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Recent Interviews
      </h2>

      {interviews.length === 0 ? (
        <p className="text-slate-400">
          No interviews yet.
        </p>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="text-left text-slate-400">
              <th>Company</th>
              <th>Role</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {interviews.slice(0, 5).map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-800 hover:bg-slate-800 transition"
              >
                <td className="py-4">
                  <Link
                    to={`/interview/details/${item.id}`}
                    className="text-cyan-400 hover:underline"
                  >
                    {item.company}
                  </Link>
                </td>

                <td>{item.role}</td>

                <td>
                  {item.overallScore !== null
                    ? `${item.overallScore}%`
                    : "-"}
                </td>

                <td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}