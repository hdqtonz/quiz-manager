import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionRepository } from '../repositorys/question.repository';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async CreateQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
