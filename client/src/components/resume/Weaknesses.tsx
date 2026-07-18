interface WeaknessesProps {
  weaknesses: string[];
}

const Weaknesses = ({ weaknesses }: WeaknessesProps) => {
  return (
    <div className="bg-red-50 rounded-2xl shadow-md p-6 border border-red-100">
      <h2 className="text-xl font-bold text-red-700 mb-5">
        ❌ Weaknesses
      </h2>

      {weaknesses.length === 0 ? (
        <p className="text-gray-500">No weaknesses found.</p>
      ) : (
        <ul className="space-y-3">
          {weaknesses.map((item, index) => (
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

export default Weaknesses;