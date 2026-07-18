import { useState } from "react";
import axios from "axios";
import ATSScore from "./ATSScore";
import Strengths from "./Strengths";
import Weaknesses from "./Weaknesses";
import MissingKeywords from "./MissingKeywords";
import Suggestions from "./Suggestions";
import { FiUploadCloud } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import Loading from "./Loading";
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
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF resume.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const token = localStorage.getItem("token");

      const { data } = await axios.post<ResumeAnalysis>(
        "http://localhost:5000/api/resume/analyze",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalysis(data);
    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to analyze resume."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (
  e: React.DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.type === "dragenter" || e.type === "dragover") {
    setDragActive(true);
  }

  if (e.type === "dragleave") {
    setDragActive(false);
  }
};

const handleDrop = (
  e: React.DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  e.stopPropagation();

  setDragActive(false);

  const droppedFile = e.dataTransfer.files[0];

  if (!droppedFile) return;

  if (droppedFile.type !== "application/pdf") {
    setError("Only PDF files are allowed.");
    return;
  }

  setFile(droppedFile);
  setError("");
};
const removeFile = () => {
  setFile(null);
  setAnalysis(null);
};

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

      <div className="flex flex-col items-center gap-8">

        <label
  onDragEnter={handleDrag}
  onDragLeave={handleDrag}
  onDragOver={handleDrag}
  onDrop={handleDrop}
  className={`
    w-full
    max-w-2xl
    rounded-3xl
    border-2
    border-dashed
    bg-gradient-to-br
    from-white
    to-blue-50
    shadow-lg
    cursor-pointer
    transition-all
    duration-300
    p-14

    ${
      dragActive
        ? "border-blue-600 scale-[1.02] shadow-2xl"
        : "border-blue-300 hover:border-blue-500 hover:shadow-xl"
    }
  `}
>
  <input
    type="file"
    accept=".pdf"
    className="hidden"
    onChange={(e) => {
      if (e.target.files?.length) {
        setFile(e.target.files[0]);
        setError("");
      }
    }}
  />

  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">

  <FiUploadCloud
    size={48}
    className="text-blue-600"
  />

</div>

    <h3 className="text-2xl font-bold text-gray-800 mt-6">
  Upload Your Resume
</h3>

<p className="text-gray-500 mt-3 text-center">
  {dragActive
  ? "Drop your resume here..."
  : "Drag & Drop your PDF here or click to browse."}
</p>

<p className="text-sm text-gray-400 mt-2">
  PDF only • Maximum file size: 5 MB
</p>
  </div>
</label>

       {file && (
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-200 p-5 flex justify-between items-center">

    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
        <FaFilePdf
          className="text-red-600"
          size={28}
        />
      </div>

      <div>
        <h4 className="font-semibold">
          {file.name}
        </h4>

        <p className="text-sm text-gray-500">
          {(file.size / 1024).toFixed(1)} KB
        </p>
      </div>

    </div>

    <div className="flex items-center gap-5">

      <span className="text-green-600 font-semibold">
        Ready
      </span>

      <button
        type="button"
        onClick={removeFile}
        className="text-red-500 hover:text-red-700 text-xl"
      >
        ✕
      </button>

    </div>

  </div>
)}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="
w-full
max-w-xl
px-10
py-4
rounded-xl
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
font-semibold
text-lg
hover:scale-105
hover:shadow-xl
transition-all
duration-300
disabled:opacity-50
disabled:hover:scale-100
"
        >
          Analyze Resume
        </button>

        {error && (
          <div className="text-red-500 font-medium">
            {error}
          </div>
        )}

        {loading && <Loading />}

      </div>

      {!loading && analysis && (
  <div className="mt-10">

    <div className="grid lg:grid-cols-3 gap-8">

      {/* ATS Score */}
      <div>
        <ATSScore score={analysis.atsScore} />
      </div>

      {/* Strengths */}
      <div className="lg:col-span-2">
        <Strengths strengths={analysis.strengths} />
      </div>

      {/* Weaknesses */}
      <Weaknesses weaknesses={analysis.weaknesses} />

      {/* Missing Keywords */}
      <MissingKeywords
        keywords={analysis.missingKeywords}
      />

      {/* Suggestions */}
      <div className="lg:col-span-3">
        <Suggestions
          suggestions={analysis.suggestions}
        />
        <div className="flex justify-end mt-8">
  <button
    onClick={() => generateResumeReport(analysis)}
    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
  >
    📄 Download Report
  </button>
</div>
      </div>

    </div>

  </div>
)}

    </div>
  );
};

export default ResumeUpload;