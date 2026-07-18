import ResumeUpload from "../components/resume/ResumeUpload";

const ResumeAnalyzer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">

  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
    🤖 AI Powered
  </div>

  <h1 className="mt-5 text-5xl md:text-6xl font-extrabold text-gray-900">
    Resume Analyzer
  </h1>

  <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-500">
    Upload your resume and receive an AI-powered ATS score,
    strengths, weaknesses, missing keywords, and personalized
    recommendations in seconds.
  </p>

</div>

        <div className="mt-12">
          <ResumeUpload />
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;