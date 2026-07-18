interface SuggestionsProps {
  suggestions: string[];
}

const Suggestions = ({ suggestions }: SuggestionsProps) => {
  return (
    <div className="bg-blue-50 rounded-2xl shadow-md p-6 border border-blue-100">
      <h2 className="text-xl font-bold text-blue-700 mb-5">
        💡 AI Suggestions
      </h2>

      {suggestions.length === 0 ? (
        <p className="text-gray-500">
          No suggestions available.
        </p>
      ) : (
        <ul className="space-y-3">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-lg p-4 border shadow-sm"
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