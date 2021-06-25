import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "8f57c2988ed3fa996e3b00719fb1f946") as IPayload
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}