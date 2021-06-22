import { UserRepository } from '../../database/repository/UserRepository';
import { getCustomRepository } from 'typeorm';


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email Incorrect");
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
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