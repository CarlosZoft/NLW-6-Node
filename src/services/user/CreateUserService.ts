import { UserRepository } from '../../database/repository/UserRepository';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import HttpException from '../../errors/HttpException';


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new HttpException(406, 'Invalid email');
    }
    if (!password) {
      throw new HttpException(406, 'Invalid password');
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new HttpException(406, 'User Already Exists');
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });
    await userRepository.save(user);

    return user;
  }
}