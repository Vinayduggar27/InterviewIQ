import express from "express";
import upload from "../middleware/upload.middleware";
import { analyzeResume } from "../controllers/resume.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  upload.single("resume"),
  analyzeResume
);

export default router;