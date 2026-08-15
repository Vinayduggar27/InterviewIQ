import ResumeUpload from "../components/resume/ResumeUpload";
import {
  FiCheckCircle,
  FiTarget,
  FiSearch,
  FiFileText,
} from "react-icons/fi";

const ResumeAnalyzer = () => {
  return (
    <div className="min-h-screen bg-[#12181F] text-white">

     {/* ================= PAGE HEADER ================= */}

<div className="border-b border-[#2F3D4B] bg-[#12181F]">
  <div className="mx-auto max-w-7xl px-8 py-7">

    <div className="flex flex-col items-center text-center">

      {/* Small Label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />

        <span className="text-sm font-medium tracking-wide text-[#6B8FB8]">
          AI Resume Analysis
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        Resume Analyzer
      </h1>

      {/* Subheading */}
      <p className="mt-3 max-w-2xl text-base md:text-lg leading-7 text-[#9AA3AD]">
        Turn your resume into a stronger application with{" "}
        <span className="text-[#C7CDD4] font-medium">
          AI-powered ATS analysis
        </span>
        , smart keyword detection, and personalized recommendations.
      </p>

      {/* Feature Tags */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">

        <span className="rounded-full border border-[#2F3D4B] bg-[#151B22] px-3 py-1 text-xs text-[#9AA3AD]">
          ATS Score
        </span>

        <span className="rounded-full border border-[#2F3D4B] bg-[#151B22] px-3 py-1 text-xs text-[#9AA3AD]">
          Keyword Analysis
        </span>

        <span className="rounded-full border border-[#2F3D4B] bg-[#151B22] px-3 py-1 text-xs text-[#9AA3AD]">
          AI Recommendations
        </span>

      </div>

    </div>

  </div>
</div>

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-7xl px-8 py-10">

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Upload */}
          <div className="lg:col-span-2">
            <ResumeUpload />
          </div>

          {/* Information Panel */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-6">

              <h2 className="text-xl font-semibold">
                What you'll get
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#9AA3AD]">
                InterviewIQ analyzes your resume across multiple
                areas to help you build a stronger application.
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
                    <FiTarget size={19} />
                  </div>

                  <div>
                    <h3 className="font-medium">
                      ATS Compatibility
                    </h3>

                    <p className="mt-1 text-sm text-[#9AA3AD]">
                      See how well your resume performs with ATS systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
                    <FiCheckCircle size={19} />
                  </div>

                  <div>
                    <h3 className="font-medium">
                      Strengths & Weaknesses
                    </h3>

                    <p className="mt-1 text-sm text-[#9AA3AD]">
                      Discover what is working and what needs improvement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
                    <FiSearch size={19} />
                  </div>

                  <div>
                    <h3 className="font-medium">
                      Missing Keywords
                    </h3>

                    <p className="mt-1 text-sm text-[#9AA3AD]">
                      Identify important skills and keywords missing from
                      your resume.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F7CAC]/15 text-[#6B8FB8]">
                    <FiFileText size={19} />
                  </div>

                  <div>
                    <h3 className="font-medium">
                      AI Recommendations
                    </h3>

                    <p className="mt-1 text-sm text-[#9AA3AD]">
                      Get practical suggestions to improve your resume.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Small info card */}
            <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-6">

              <p className="text-sm text-[#9AA3AD]">
                Supported format
              </p>

              <div className="mt-3 flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-500/10 p-2 text-red-400">
                    PDF
                  </div>

                  <span className="font-medium">
                    Resume PDF
                  </span>
                </div>

                <span className="text-sm text-green-400">
                  Supported
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM INFO ================= */}

        <div className="mt-10">

          <h2 className="text-xl font-semibold">
            How InterviewIQ evaluates your resume
          </h2>

          <p className="mt-2 text-sm text-[#9AA3AD]">
            Your resume is reviewed across these key areas.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">

            {[
              ["ATS Score", "Recruiter compatibility"],
              ["Skills", "Technical skill coverage"],
              ["Keywords", "Relevant keyword matching"],
              ["Structure", "Clarity and organization"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-5 transition hover:border-[#4F7CAC]"
              >
                <h3 className="font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-[#9AA3AD]">
                  {description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </main>

    </div>
  );
};

export default ResumeAnalyzer;