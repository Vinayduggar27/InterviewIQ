export default function ProgressChart() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 h-96">

      <h2 className="text-2xl font-semibold">
        Weekly Progress
      </h2>

      <div className="flex items-end justify-between h-64 mt-8">

        {[45,60,75,50,90,70,100].map((height,index)=>(
          <div
            key={index}
            className="w-10 bg-cyan-500 rounded-t-xl"
            style={{height:`${height}%`}}
          />
        ))}

      </div>

    </div>
  );
}