import { UserRepository } from '../../database/repository/UserRepository';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import HttpException from '../../errors/HttpException';
import IUserRequest from '../../dtos/IUserRequest';

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
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

    const passwordHash = await hash(password, process.env.SECRET_SALT);

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