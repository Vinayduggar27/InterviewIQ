import { useState } from "react";
import api from "../../services/api";

import ATSScore from "./ATSScore";
import Strengths from "./Strengths";
import Weaknesses from "./Weaknesses";
import MissingKeywords from "./MissingKeywords";
import Suggestions from "./Suggestions";
import Loading from "./Loading";

import {
  FiUploadCloud,
  FiFileText,
  FiX,
} from "react-icons/fi";

import { FaFilePdf } from "react-icons/fa";
import { generateResumeReport } from "../../utils/resumeReport";

interface ResumeAnalysis {
  id: string;
  atsScore: number;
  strengths: string[];
  weaknesses: string[];
  missingKeywords: string[];
  suggestions: string[];
}

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] =
    useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  // ================= FILE CHANGE =================

  const handleFileChange = (selectedFile: File) => {
    if (selectedFile.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }

    setFile(selectedFile);
    setError("");
    setAnalysis(null);
  };

  // ================= DRAG HANDLERS =================

  const handleDrag = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      e.type === "dragenter" ||
      e.type === "dragover"
    ) {
      setDragActive(true);
    }

    if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const droppedFile =
      e.dataTransfer.files?.[0];

    if (droppedFile) {
      handleFileChange(droppedFile);
    }
  };

  // ================= REMOVE FILE =================

  const removeFile = () => {
    setFile(null);
    setAnalysis(null);
    setError("");
  };

  // ================= ANALYZE RESUME =================

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF resume first.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const token =
        localStorage.getItem("token");

      const { data } = await api.post<ResumeAnalysis>(
  "/resume/analyze",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      setAnalysis(data);
    } catch (err: any) {
      console.error(
        "Resume analysis error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Failed to analyze resume. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================

  return (
    <div className="w-full">

      {/* ================= UPLOAD SECTION ================= */}

      <div className="w-full">

        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`min-h-[430px] rounded-2xl border-2 border-dashed p-8 transition-all duration-300 ${
            dragActive
              ? "border-[#4F7CAC] bg-[#18212B]"
              : "border-[#2F3D4B] bg-[#151B22] hover:border-[#4F7CAC]"
          }`}
        >

          {!file ? (
            <div className="flex min-h-[370px] flex-col items-center justify-center text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#4F7CAC]/15">
                <FiUploadCloud
                  size={38}
                  className="text-[#6B8FB8]"
                />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">
                Upload Your Resume
              </h2>

              <p className="mt-2 max-w-md text-[#9AA3AD]">
                Drag and drop your PDF resume here or
                choose a file from your computer.
              </p>

              <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#4F7CAC] px-7 py-3 font-semibold text-white transition hover:bg-[#3F6790] hover:shadow-lg">

                <FiFileText size={18} />

                Choose PDF

                <input
                  type="file"
                  accept=".pdf,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    const selectedFile =
                      e.target.files?.[0];

                    if (selectedFile) {
                      handleFileChange(
                        selectedFile
                      );
                    }
                  }}
                />

              </label>

              <p className="mt-4 text-xs text-[#6F7A86]">
                PDF files only
              </p>

            </div>
          ) : (
            <div className="flex min-h-[370px] flex-col items-center justify-center">

              {/* Selected File */}

              <div className="w-full max-w-2xl rounded-2xl border border-[#2F3D4B] bg-[#12181F] p-5">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex min-w-0 items-center gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                      <FaFilePdf
                        size={27}
                        className="text-red-400"
                      />
                    </div>

                    <div className="min-w-0">

                      <h3 className="truncate font-semibold text-white">
                        {file.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#9AA3AD]">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={removeFile}
                    className="rounded-lg p-2 text-[#9AA3AD] transition hover:bg-[#1D2126] hover:text-white"
                    title="Remove file"
                  >
                    <FiX size={20} />
                  </button>

                </div>

              </div>

              {/* Ready Status */}

              <div className="mt-6 flex items-center gap-2 text-sm text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Resume ready for analysis
              </div>

              {/* Analyze Button */}

              {!loading && (
                <button
                  type="button"
                  onClick={handleUpload}
                  className="mt-6 rounded-xl bg-[#4F7CAC] px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-[#3F6790] hover:shadow-xl"
                >
                  Analyze Resume
                </button>
              )}

            </div>
          )}

        </div>

        {/* Error */}

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Loading */}

        {loading && (
          <div className="mt-8 flex justify-center">
            <Loading />
          </div>
        )}

      </div>

      {/* ================= ANALYSIS RESULTS ================= */}

      {!loading && analysis && (
        <div className="mt-10">

          {/* Results Header */}

          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-medium text-[#6B8FB8]">
                Analysis Complete
              </p>

              <h2 className="mt-1 text-3xl font-bold text-white">
                Resume Performance
              </h2>

              <p className="mt-2 text-[#9AA3AD]">
                Here's what InterviewIQ found in your resume.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                generateResumeReport(analysis)
              }
              className="rounded-xl border border-[#2F3D4B] bg-[#151B22] px-5 py-3 font-semibold text-white transition hover:border-[#4F7CAC] hover:bg-[#1D2126]"
            >
              📄 Download Report
            </button>

          </div>

          {/* ATS + Strengths */}

<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

  <ATSScore
    score={analysis.atsScore}
  />

  <div className="lg:col-span-2">
    <Strengths
      strengths={analysis.strengths}
    />
  </div>

</div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

  <Weaknesses
    weaknesses={analysis.weaknesses}
  />

  <MissingKeywords
    keywords={analysis.missingKeywords}
  />

</div>

         <div className="mt-6">
  <Suggestions
    suggestions={analysis.suggestions}
  />
</div>

        </div>
      )}

    </div>
  );
};

export default ResumeUpload;