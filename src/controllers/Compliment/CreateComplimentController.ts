import { Request, Response } from 'express';
import { CreateComplimentService } from '../../services/Compliment/CreateComplimentService';

export class CreateComplimentController {

  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const { user_id } = request;
    const service = new CreateComplimentService();

    const compliment = await service.execute({
      tag_id,
      user_receiver,
      user_sender: user_id,
      message
    })
    response.json(compliment);
  }

}