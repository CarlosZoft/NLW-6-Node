import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '../../database/repository/ComplimentsRepository';
import { UserRepository } from '../../database/repository/UserRepository';
import HttpException from '../../errors/HttpException'

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}


export class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentsRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender === user_receiver) {
      throw new HttpException(401, "User Receiver can't be the same User Sender")
    }

    const userReceiverExists = await userRepository.findOne({ id: user_receiver });
    if (!userReceiverExists) {
      throw new HttpException(404, "User Receiver does not exists!");
    }

    const compliment = complimentRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })
    await complimentRepository.save(compliment);

    return compliment;
  }
}