import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profile.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getProfile);
router.put("/", protect, updateProfile);

export default router;