import express, { NextFunction, Request, Response } from "express";
import userRoutes from '../routes/user';
import "reflect-metadata";
import "../database";
import 'express-async-errors';


export default () => {
  const app = express();

  app.use(express.json());
  app.use("/users", userRoutes);



  return app;
}