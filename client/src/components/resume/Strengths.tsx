interface StrengthsProps {
  strengths: string[];
}

const Strengths = ({ strengths }: StrengthsProps) => {
  return (
    <div className="bg-green-50 rounded-2xl shadow-md p-6 border border-green-100">
      <h2 className="text-xl font-bold text-green-700 mb-5">
        ✅ Strengths
      </h2>

      {strengths.length === 0 ? (
        <p className="text-gray-500">No strengths found.</p>
      ) : (
        <ul className="space-y-3">
          {strengths.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-lg px-4 py-3 shadow-sm border"
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