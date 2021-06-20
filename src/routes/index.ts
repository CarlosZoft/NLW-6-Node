import { Router, Request, Response } from 'express';
const router = Router();

router.get('/test', (request: Request, response: Response) => {
  return response.send("Olá NLW");
});

router.post('/test', (request: Request, response: Response) => {
  return response.send("Olá NLW método post");
})

export default router;