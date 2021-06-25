import { Request, Response } from 'express';
import { ListUsersService } from '../../services/user/ListUsersService';

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const service = new ListUsersService();

    const users = await service.execute();

    response.status(200).json(users);
  }

}