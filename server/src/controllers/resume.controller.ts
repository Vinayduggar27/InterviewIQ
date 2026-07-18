import { Response } from "express";
import pdfParse from "pdf-parse";
import { analyzeResumeWithAI } from "../services/resume.service";
import { AuthRequest } from "../middleware/auth.middleware";
import prisma from "../config/prisma";



export const analyzeResume = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF resume.",
      });
    }

    const pdf = await pdfParse(req.file.buffer);
    const result = await analyzeResumeWithAI(pdf.text);

    const analysis = await prisma.resumeAnalysis.create({
      data: {
        atsScore: result.atsScore,
        strengths: result.strengths,
        weaknesses: result.weaknesses,
        missingKeywords: result.missingKeywords,
        suggestions: result.suggestions,
        userId: req.userId!,
      },
    });

    return res.status(200).json(analysis);
  } catch (error: any) {
  console.error("========== RESUME ANALYZER ERROR ==========");
  console.error(error);
  console.error(error.message);
  console.error(error.stack);
  console.error("==========================================");

  return res.status(500).json({
    message: error.message,
  });
}
};