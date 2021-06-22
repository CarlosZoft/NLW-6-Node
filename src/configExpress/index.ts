import express from "express";
import testRouter from '../routes';
import "../database";
import "reflect-metadata";

export default () => {
  const app = express();
  app.use(express.json());
  app.use(testRouter);

  return app;
}