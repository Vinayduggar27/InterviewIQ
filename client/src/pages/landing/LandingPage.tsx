import Navbar from "../../components/layout/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="pt-32 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Ace Every Interview with
          <span className="text-cyan-400"> AI</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Practice real interview questions, receive instant AI feedback,
          improve your resume, and track your interview performance—all in one
          place.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-xl transition">
            Start Free
          </button>

          <button className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-xl transition">
            Watch Demo
          </button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;