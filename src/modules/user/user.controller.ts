import { Body, Controller, Post } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDto } from './dto/user-registor.req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return this.userService.doUserRegistration(userRegister);
  }
}
