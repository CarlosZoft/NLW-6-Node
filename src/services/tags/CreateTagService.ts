import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../../database/repository/TagsRepository';
import HttpException from '../../errors/HttpException';

export class CreateTagService {

  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepository);
    if (!name) {
      throw new HttpException(406, "incorrect name");
    }
    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new HttpException(406, "Tag Already Exists");
    }

    const tag = tagsRepository.create({
      name
    })
    await tagsRepository.save(tag);

    return tag;
  }
}