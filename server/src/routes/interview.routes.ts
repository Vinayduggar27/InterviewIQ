import { Router } from "express";
import {
  createInterview,
  getInterviews,
  getInterviewById,
  generateQuestions,
} from "../controllers/interview.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getInterviews);
router.post("/", protect, createInterview);
router.get("/:id", protect, getInterviewById);
router.post("/:id/generate", protect, generateQuestions);
export default router;