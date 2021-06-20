import express from "express";
import testRouter from '../routes'

export default () => {
  const app = express();
  app.use(express.json());
  app.use(testRouter);

  return app;
}