import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";
import { authMiddleware } from "../middleware/authMiddleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", authMiddleware, asyncHandler(createProject));
router.get("/", authMiddleware, asyncHandler(getProjects));

export default router;