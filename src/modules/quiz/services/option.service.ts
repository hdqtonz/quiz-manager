import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';
import { OptionRepositroy } from '../repositorys/option.repository';

@Injectable()
export class OpntionService {
  constructor(
    @InjectRepository(OptionRepositroy)
    private optionRepository: OptionRepositroy,
  ) {}

  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];
    await question.save();

    return newOption;
  }
}
