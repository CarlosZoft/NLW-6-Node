import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../../services/user/ListUserReceiveComplimentsService';

export class ListUserReceiveController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new ListUserReceiveComplimentsService();
    const compliments = await service.execute(user_id);


    return response.status(200).json(compliments);

  }

}