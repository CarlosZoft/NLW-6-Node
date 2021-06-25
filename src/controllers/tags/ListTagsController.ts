import { Request, Response } from 'express';
import { ListTagsServices } from '../../services/tags/ListTagsService';


export class ListTagsController {
  async handle(request: Request, response: Response) {
    const service = new ListTagsServices();

    const tags = await service.execute();

    return response.status(200).json(tags);

  }
}