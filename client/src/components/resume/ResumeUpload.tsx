import { useState } from "react";
import axios from "axios";
import ATSScore from "./ATSScore";
import Strengths from "./Strengths";
import Weaknesses from "./Weaknesses";
import MissingKeywords from "./MissingKeywords";
import Suggestions from "./Suggestions";

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
    <div className="bg-white rounded-2xl shadow-lg border p-8">

      <div className="flex flex-col items-center gap-5">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            if (e.target.files?.length) {
              setFile(e.target.files[0]);
              setError("");
            }
          }}
        />

        {file && (
          <p className="text-gray-600 text-sm">
            Selected File:
            <span className="font-semibold ml-1">
              {file.name}
            </span>
          </p>
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Analyzing Resume..." : "Analyze Resume"}
        </button>

        {error && (
          <div className="text-red-500 font-medium">
            {error}
          </div>
        )}
      </div>

      {analysis && (
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