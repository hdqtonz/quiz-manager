import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuestionRepository } from './repositorys/question.repository';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositorys/quiz.repository';
import { QuizService } from './services/quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
