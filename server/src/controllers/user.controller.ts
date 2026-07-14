import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  res.json(user);
};
export const updateProfile = async (
  req: AuthRequest,
  res: Response
) => {
  const { name } = req.body;

  const user = await prisma.user.update({
    where: {
      id: req.userId,
    },
    data: {
      name,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  res.json({
    message: "Profile updated successfully",
    user,
  });
};