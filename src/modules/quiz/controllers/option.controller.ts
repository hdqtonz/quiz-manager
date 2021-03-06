import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOptionDto } from '../dto/create-option.dto';
import { OpntionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@ApiTags('Option')
@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OpntionService,
    private questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOption.questionId,
    );
    const option = await this.optionService.createOption(
      createOption,
      question,
    );
    return { question, createOption, option };
  }
}
