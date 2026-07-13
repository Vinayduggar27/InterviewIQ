export default function RecentInterviews() {

  const interviews = [
    {
      company:"Google",
      score:"92%",
      date:"Yesterday"
    },
    {
      company:"Amazon",
      score:"86%",
      date:"2 days ago"
    },
    {
      company:"Microsoft",
      score:"90%",
      date:"Last Week"
    }
  ];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Recent Interviews
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-slate-400">

            <th>Company</th>
            <th>Score</th>
            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {interviews.map((item,index)=>(
            <tr
              key={index}
              className="border-t border-slate-800"
            >
              <td className="py-4">{item.company}</td>
              <td>{item.score}</td>
              <td>{item.date}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}