import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        university: true,
        course: true,
        github: true,
        linkedin: true,
        avatar: true,
      },
    });

    return res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch profile",
    });
  }
};

export const updateProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const {
      name,
      email,
      university,
      course,
      github,
      linkedin,
    } = req.body;

    // Make sure email is not empty
    if (!email || !email.trim()) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // Check if another account already uses this email
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email.trim(),
        NOT: {
          id: req.userId,
        },
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "This email is already being used by another account",
      });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: req.userId,
      },
      data: {
        name: name?.trim(),
        email: email.trim(),
        university: university?.trim() || null,
        course: course?.trim() || null,
        github: github?.trim() || null,
        linkedin: linkedin?.trim() || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        university: true,
        course: true,
        github: true,
        linkedin: true,
        avatar: true,
      },
    });

    return res.json(updatedUser);
  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);

    return res.status(500).json({
      message: "Failed to update profile",
    });
  }
};