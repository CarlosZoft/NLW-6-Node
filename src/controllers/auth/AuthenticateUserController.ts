import { Response, Request, NextFunction } from 'express';
import { AuthenticateUserService } from '../../services/auth/AuthenticateUserService';

export class AuthenticateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body;

    const service = new AuthenticateUserService();
    const token = await service.execute({ email, password });

    if (token) {
      response.json({ token });
    }
  }
}