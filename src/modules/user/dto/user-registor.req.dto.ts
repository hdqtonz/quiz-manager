import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGE, REGEX } from 'src/app.utils';

export class UserRegisterRequestDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'hiten patel',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'hiten@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Password@123',
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGE.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @ApiProperty({
    description: 'The confirm password of the user',
    example: 'Password@123',
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGE.PASSWORD_RULE_MESSAGE,
  })
  confirm: string;
}
