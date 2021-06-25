import { Request, Response } from 'express';
import { ListUserSenderComplimentsService } from '../../services/user/ListUserSenderComplimentsService';

export class ListUserSenderController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new ListUserSenderComplimentsService();
    const compliments = await service.execute(user_id);


    return response.status(200).json(compliments);

  }

}