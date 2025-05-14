import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsRepository } from './cats/cat.repository';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatsRepository,
  ) {}

  @Get('cats')
  getAllCats() {
    return this.catService.findAll();
  }
  @Post('cats')
  createCat(@Body() dto) {
    return this.catService.create(dto);
  }
}
