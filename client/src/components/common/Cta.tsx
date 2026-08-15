export default function Cta() {
  return (
    <section className="bg-[#12181F] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#4F7CAC] border border-[#6B8FB8] rounded-3xl p-16 text-center shadow-sm">

          {/* Heading */}
          <h2 className="text-5xl font-bold text-white">
            Ready to Ace Your Next Interview?
          </h2>

          {/* Description */}
          <p className="mt-5 text-xl text-[#E2E8F0]">
            Practice with AI and land your dream job.
          </p>

          {/* Button */}
          <button
            type="button"
            className="mt-10 bg-[#151B22] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#1D2732] transition-all duration-200"
          >
            Get Started Free
          </button>

        </div>
      </div>
    </section>
  );
}