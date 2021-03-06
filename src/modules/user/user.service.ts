import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-registor.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor() {}

  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;

    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }
}
