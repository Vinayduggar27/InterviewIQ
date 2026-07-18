import ResumeUpload from "../components/resume/ResumeUpload";

const ResumeAnalyzer = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">
          AI Resume Analyzer
        </h1>

        <p className="text-gray-500 mt-2">
          Upload your resume and receive AI-powered ATS feedback.
        </p>

        <div className="mt-10">
          <ResumeUpload />
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;