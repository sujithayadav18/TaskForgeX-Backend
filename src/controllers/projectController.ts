import { Request, Response } from "express";
import  * as ProjectService  from "../services/projectService";
import { AppError } from "../utils/appError";

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
  };
}

export const createProject = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const { name, description } = req.body;

  const userId = req.user?.userId;

  if (!userId) {
    throw new AppError("Unauthorized", 401);
  }

  const project = await ProjectService.createProject(name, description, userId);

  res.status(201).json({
    success: true,
    data: project,
  });
};


export const getProjects = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    throw new AppError("Unauthorized", 401);
  }

  const projects = await ProjectService.getProjects(userId);

  res.status(200).json({
    success: true,
    data: projects,
  });
};