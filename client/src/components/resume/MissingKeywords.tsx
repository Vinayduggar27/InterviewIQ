interface MissingKeywordsProps {
  keywords: string[];
}

const MissingKeywords = ({ keywords }: MissingKeywordsProps) => {
  return (
    <div className="bg-white rounded-3xl border-t-4 border-yellow-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
      <h2 className="text-2xl font-bold text-yellow-700 mb-6 flex items-center gap-2">
        🎯 Missing Keywords
      </h2>

      {keywords.length === 0 ? (
        <p className="text-gray-500">
          No missing keywords detected.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-800 border border-yellow-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-yellow-200 transition-all duration-200"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MissingKeywords;