import { UserRepository } from '../../database/repository/UserRepository';
import { getCustomRepository } from 'typeorm';
import HttpException from '../../errors/HttpException';


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new HttpException(406, 'Invalid email');
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new HttpException(406, 'User Already Exists');
    }
    const user = userRepository.create({
      name,
      email,
      admin
    });
    await userRepository.save(user);

    return user;
  }
}