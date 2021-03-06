import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import "../database";
import userRoutes from '../routes/user';
import tagsRoutes from '../routes/tags';
import authRoutes from '../routes/auth';
import complimentRoutes from '../routes/compliment';
import HttpException from '../errors/HttpException';


export default () => {
  const app = express();

  app.use(express.json());

  app.use("/compliment", complimentRoutes);
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/tags", tagsRoutes);


  app.use((error: HttpException, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(error.status || 406).json({ error: error.message });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
    })
  })



  return app;
}