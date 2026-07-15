import { Router } from "express";
import {
  createInterview,
  getInterviews,
  getInterviewById,
  generateQuestions,
   evaluateInterview,
} from "../controllers/interview.controller";
import { protect } from "../middleware/auth.middleware";


const router = Router();

router.get("/", protect, getInterviews);
router.post("/", protect, createInterview);
router.get("/:id", protect, getInterviewById);
router.post("/:id/generate", protect, generateQuestions);
router.post("/:id/evaluate", protect, evaluateInterview);
export default router;