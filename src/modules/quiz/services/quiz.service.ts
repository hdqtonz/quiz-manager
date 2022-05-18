import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositorys/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz() {
    return await this.quizRepository.find();
  }

  async getQuizById(id: number): Promise<Quiz> {
    const quizs = await this.quizRepository.findOne(id, {
      relations: ['questions'],
    });

    return quizs;
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
