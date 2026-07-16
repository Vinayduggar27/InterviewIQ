import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const getDashboardStats = async (
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

    const totalInterviews = interviews.length;

    const completed = interviews.filter(
      (i) => i.overallScore !== null
    );

    const averageScore =
      completed.length > 0
        ? Math.round(
            completed.reduce(
              (sum, i) => sum + (i.overallScore || 0),
              0
            ) / completed.length
          )
        : 0;

    const highestScore =
      completed.length > 0
        ? Math.max(
            ...completed.map(
              (i) => i.overallScore || 0
            )
          )
        : 0;

    return res.json({
      totalInterviews,
      averageScore,
      highestScore,
      recentInterviews: interviews.slice(0, 5),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to load dashboard",
    });
  }
};