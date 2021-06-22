import express from "express";
import testRouter from '../routes';
import "reflect-metadata";
import "../database";

export default () => {
  const app = express();
  app.use(express.json());
  app.use(testRouter);

  return app;
}