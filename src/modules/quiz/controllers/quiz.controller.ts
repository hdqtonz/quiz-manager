import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizes' })
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Get a quiz by id' })
  async getQuizById(@Param('id', ParseIntPipe) id: number) {
    return await this.quizService.getQuizById(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
