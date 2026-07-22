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
    const updatedUser = await prisma.user.update({
      where: {
        id: req.userId,
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        university: req.body.university,
        course: req.body.course,
        github: req.body.github,
        linkedin: req.body.linkedin,
      },
    });

    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update profile",
    });
  }
};