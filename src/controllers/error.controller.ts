import { APPERROR } from "../Utils/apperror.js";
import { type Request, type Response, type NextFunction } from "express";
export const errorHandle = (
  error: APPERROR,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  error.statuscode = error.statuscode || 500;
  error.status = error.status || "fail";
  if (process.env.NODE_ENV === "development") {
    return res.status(error.statuscode).json({
      status: error.status,
      message: error.message,
      stack: error.stack,
    });
  } else return res.status(error.statuscode).json({ message: error.message });
};
