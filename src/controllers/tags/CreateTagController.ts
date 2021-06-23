import { Request, Response } from "express"
import { CreateTagService } from "../../services/tags/CreateTagService"

export class CreateTagController {

  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const service = new CreateTagService();
    const tag = await service.execute(name);
    if (tag) {
      response.json(tag);
    }
  }


}