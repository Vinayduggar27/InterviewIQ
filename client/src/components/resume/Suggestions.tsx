interface SuggestionsProps {
  suggestions: string[];
}

const Suggestions = ({ suggestions }: SuggestionsProps) => {
  return (
    <div className="bg-white rounded-3xl border-t-4 border-blue-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        💡 AI Suggestions
      </h2>

      {suggestions.length === 0 ? (
        <p className="text-gray-500">
          No suggestions available.
        </p>
      ) : (
        <ul className="space-y-4">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;