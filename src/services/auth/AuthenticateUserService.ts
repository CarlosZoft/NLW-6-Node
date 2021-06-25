import HttpException from '../../errors/HttpException'
import { UserRepository } from '../../database/repository/UserRepository';
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import IAuthenticateRequest from '../../dtos/IAuthenticateRequest'
export class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new HttpException(406, "Email/Password incorrect");
    }

    const auth = await compare(password, user.password);

    if (!auth) {
      throw new HttpException(406, "Email/Password incorrect");
    }

    const token = sign({
      email: user.email,
    }, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }



}