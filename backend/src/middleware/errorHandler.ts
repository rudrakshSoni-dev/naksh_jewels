import { Request, Response, NextFunction } from "express";

/* ------------ TYPES ------------ */

interface AppError extends Error {
  status?: number;
}

/* ------------ ERROR HANDLER ------------ */

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err);

  res.status(err.status ?? 500).json({
    success: false,
    message: err.message ?? "Internal Server Error",
  });
};

export default errorHandler;
