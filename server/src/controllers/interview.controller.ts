import { Request, Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  generateInterviewQuestions,
  evaluateInterviewAnswers,
} from "../services/groq.service";

export const createInterview = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { role, company, experience, techStack } = req.body;

    const interview = await prisma.interview.create({
      data: {
        role,
        company,
        experience: Number(experience),
        techStack,
        userId: req.userId!,
      },
    });

    return res.status(201).json(interview);
  } catch (error: any) {
  console.error("========== CREATE INTERVIEW ERROR ==========");
  console.error(error);
  console.error(error.message);
  console.error(error.meta);
  console.error("===========================================");

  return res.status(500).json({
    message: error.message,
  });
}
};
export const getInterviews = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const interviews = await prisma.interview.findMany({
      where: {
        userId: req.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(interviews);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch interviews",
    });
  }
};
export const getInterviewById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const interview = await prisma.interview.findFirst({
      where: {
        id: req.params.id as string,
        userId: req.userId,
      },
    });

    if (!interview) {
      return res.status(404).json({
        message: "Interview not found",
      });
    }

    return res.json(interview);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch interview",
    });
  }
};
export const generateQuestions = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const interview = await prisma.interview.findFirst({
      where: {
        id: req.params.id as string,
        userId: req.userId,
      },
    });

    if (!interview) {
      return res.status(404).json({
        message: "Interview not found",
      });
    }

    const questions = await generateInterviewQuestions(
      interview.role,
      interview.experience,
      interview.techStack
    );

    const updatedInterview = await prisma.interview.update({
      where: {
        id: interview.id,
      },
      data: {
        questions,
      },
    });

    return res.json(updatedInterview);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to generate questions",
    });
  }
};
export const evaluateInterview = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const interview = await prisma.interview.findFirst({
      where: {
        id: req.params.id as string,
        userId: req.userId,
      },
    });

    if (!interview) {
      return res.status(404).json({
        message: "Interview not found",
      });
    }

    const { answers } = req.body;

   const result = await evaluateInterviewAnswers(
  interview.questions as string[],
  answers,
  interview.role
);
await prisma.interview.update({
  where: {
    id: interview.id,
  },
  data: {
    answers,

    overallScore: result.overallScore,
    technicalScore: result.technicalScore,
    communicationScore: result.communicationScore,
    confidenceScore: result.confidenceScore,

    feedback: result.feedback,

    strengths: result.strengths,
    weaknesses: result.weaknesses,

    completedAt: new Date(),
  },
});

return res.json(result);

  } catch (error: any) {
  console.error("========== CREATE INTERVIEW ERROR ==========");
  console.error(error);
  console.error(error.message);
  console.error(error.meta);
  console.error("===========================================");

  return res.status(500).json({
    message: error.message,
  });
}
};