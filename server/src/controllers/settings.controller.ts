import { Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";
import { deleteAccountService } from "../services/deleteAccount.service";
export const deleteAccount = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    await deleteAccountService(
      req.userId!,
      req.body.password
    );

    res.json({
      success: true,
      message: "Account deleted successfully.",
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const changePassword = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!req.userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect.",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: {
        id: req.userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    return res.json({
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};