import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuestionRepository } from './repositorys/question.repository';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositorys/quiz.repository';
import { QuizService } from './services/quiz.service';
import { OptionRepositroy } from './repositorys/option.repository';
import { OpntionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepositroy,
    ]),
  ],
  controllers: [QuizController, QuestionController, OptionController],
  providers: [QuizService, QuestionService, OpntionService],
})
export class QuizModule {}
