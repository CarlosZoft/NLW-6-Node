import { Request, Response } from 'express';
import { CreateComplimentService } from '../../services/Compliment/CreateComplimentService';

export class CreateComplimentController {

  async handle(request: Request, response: Response) {
    const { tag_id,
      user_receiver,
      user_sender,
      message } = request.body;
    const service = new CreateComplimentService();

    const compliment = await service.execute({
      tag_id,
      user_receiver,
      user_sender,
      message
    })
    response.json(compliment);
  }

}