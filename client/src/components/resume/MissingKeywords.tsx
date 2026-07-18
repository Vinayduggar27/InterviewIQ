interface MissingKeywordsProps {
  keywords: string[];
}

const MissingKeywords = ({ keywords }: MissingKeywordsProps) => {
  return (
    <div className="bg-yellow-50 rounded-2xl shadow-md p-6 border border-yellow-100">
      <h2 className="text-xl font-bold text-yellow-700 mb-5">
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
              className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium"
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