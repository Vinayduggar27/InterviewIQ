import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Register route working"
  });
};

export const login = async (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Login route working"
  });
};