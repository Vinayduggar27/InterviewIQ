interface WeaknessesProps {
  weaknesses: string[];
}

const Weaknesses = ({ weaknesses }: WeaknessesProps) => {
  return (
    <div className="bg-white rounded-3xl border-t-4 border-red-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
      <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
        ❌ Weaknesses
      </h2>

      {weaknesses.length === 0 ? (
        <p className="text-gray-500">No weaknesses found.</p>
      ) : (
        <ul className="space-y-4">
          {weaknesses.map((item, index) => (
            <li
              key={index}
              className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200"
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