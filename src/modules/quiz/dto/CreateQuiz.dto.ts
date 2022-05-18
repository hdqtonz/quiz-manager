import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(5, 255)
  title: string;

  @IsNotEmpty()
  @Length(10, 500)
  description: string;
}
