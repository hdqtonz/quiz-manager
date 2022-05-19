import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @Length(1, 255)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
