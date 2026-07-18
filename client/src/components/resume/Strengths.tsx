interface StrengthsProps {
  strengths: string[];
}

const Strengths = ({ strengths }: StrengthsProps) => {
  return (
    <div className="bg-white rounded-3xl border-t-4 border-green-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
        ✅ Strengths
      </h2>

      {strengths.length === 0 ? (
        <p className="text-gray-500">No strengths found.</p>
      ) : (
        <ul className="space-y-4">
          {strengths.map((item, index) => (
            <li
              key={index}
              className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Strengths;