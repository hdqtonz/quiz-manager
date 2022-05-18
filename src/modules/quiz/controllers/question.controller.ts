import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private qustionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() quastion: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(quastion.quizId);

    return this.qustionService.CreateQuestion(quastion, quiz);
  }
}
