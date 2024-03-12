import { Controller, Get, Post, Redirect, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('index')
  getIndex(): string {
    return this.appService.getIndex();
  }

  @Post('new')
  responseNew(): string {
    return this.appService.responseNew();
  }

  @Get('redirect')
  @Redirect('/index')
  redirect(): void {
  }

  // 動的パラメータ
  @Get('id/:id')
  responseId(@Param() params: any): string{
    return params.id;
  }
}
