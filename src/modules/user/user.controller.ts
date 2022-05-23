import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDto } from './dto/user-registor.req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'User connot register',
  })
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return this.userService.doUserRegistration(userRegister);
  }
}
