import { Router } from "express";

import { protect } from "../middleware/auth.middleware";

import {
  changePassword,
  deleteAccount,
} from "../controllers/settings.controller";

const router = Router();

router.put(
  "/change-password",
  protect,
  changePassword
);

router.delete(
  "/delete-account",
  protect,
  deleteAccount
);

export default router;