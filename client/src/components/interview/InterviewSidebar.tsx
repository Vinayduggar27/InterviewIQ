export default function InterviewSidebar() {
  return (
    <div className="space-y-6">

      <div className="bg-slate-900 rounded-xl p-5">

        <h2 className="text-xl font-semibold mb-4">
          Interview Progress
        </h2>

        <div className="w-full bg-slate-800 rounded-full h-3">

          <div
            className="bg-cyan-400 h-3 rounded-full"
            style={{ width: "10%" }}
          />

        </div>

        <p className="text-slate-400 mt-3">
          Question 1 of 10
        </p>

      </div>

      <div className="bg-slate-900 rounded-xl p-5">

        <h2 className="text-xl font-semibold mb-4">
          Tips
        </h2>

        <ul className="space-y-3 text-slate-400 text-sm">

          <li>✔ Speak clearly.</li>

          <li>✔ Maintain eye contact.</li>

          <li>✔ Give structured answers.</li>

          <li>✔ Think before answering.</li>

        </ul>

      </div>

    </div>
  );
}