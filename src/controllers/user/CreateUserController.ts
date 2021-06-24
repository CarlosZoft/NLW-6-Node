import { Request, Response, NextFunction } from "express";
import { CreateUserService } from '../../services/user/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { name, email, admin, password } = request.body;

    const service = new CreateUserService();

    const user = await service.execute({ name, email, admin, password });
    if (user) {
      response.json(user);
    }

  }
}