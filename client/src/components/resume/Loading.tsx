const Loading = () => {
  return (
    <div className="mt-10 flex flex-col items-center">

      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        AI is analyzing your resume...
      </h2>

      <p className="mt-2 text-gray-500">
        Please wait while we calculate your ATS score.
      </p>

    </div>
  );
};

export default Loading;