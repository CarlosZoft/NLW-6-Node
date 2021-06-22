import express, { NextFunction, Request, Response } from "express";
import userRoutes from '../routes/user';
import "reflect-metadata";
import "../database";
import HttpException from '../errors/HttpException';


export default () => {
  const app = express();

  app.use(express.json());
  app.use("/users", userRoutes);

  app.use((error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response
      .status(status)
      .send({
        status,
        message,
      })
  })



  return app;
}