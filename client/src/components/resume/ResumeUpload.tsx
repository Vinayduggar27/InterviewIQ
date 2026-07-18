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

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

      <div className="flex flex-col items-center gap-8">

        <label
  className="
w-full
max-w-2xl
rounded-3xl
border-2
border-dashed
border-blue-300
bg-gradient-to-br
from-white
to-blue-50
shadow-lg
hover:shadow-2xl
hover:border-blue-500
transition-all
duration-300
cursor-pointer
p-14
"
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
  Drag & drop your PDF here or click to browse.
</p>

<p className="text-sm text-gray-400 mt-2">
  PDF only • Maximum file size: 5 MB
</p>
  </div>
</label>

       {file && (
  <div className="w-full max-w-xl bg-gray-100 rounded-xl p-4 flex items-center justify-between border">

    <div className="flex items-center gap-3">

      <FaFilePdf
        className="text-red-600"
        size={28}
      />

      <div>

        <p className="font-semibold">
          {file.name}
        </p>

        <p className="text-sm text-gray-500">
          Ready for AI Analysis
        </p>

      </div>

    </div>

    <span className="text-green-600 text-xl font-bold">
      ✓
    </span>

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
  <div className="mt-10 border-t pt-8">

    <ATSScore score={analysis.atsScore} />

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <Strengths strengths={analysis.strengths} />

      <Weaknesses weaknesses={analysis.weaknesses} />

      <MissingKeywords
    keywords={analysis.missingKeywords}
/>

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