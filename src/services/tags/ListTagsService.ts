import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../../database/repository/TagsRepository';
import { classToPlain } from 'class-transformer';


export class ListTagsServices {

  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);
    const tags = await tagsRepository.find();

    return classToPlain(tags);
  }

}