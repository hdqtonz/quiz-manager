import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositorys/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      // .leftJoinAndSelect('qt.options', 'o')
      // .take(1)
      // .getManyAndCount();
      .getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    const quizs = await this.quizRepository.findOne(id, {
      relations: ['questions', 'questions.options'],
    });

    return quizs;
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
