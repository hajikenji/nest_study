import { Controller, Get, Post, Redirect, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Test as TestModel, Prisma } from '@prisma/client';

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

  // Post受信
  @Post('new')
  responseNew(): string {
    return this.appService.responseNew();
  }

  // リダイレクト
  @Get('redirect')
  @Redirect('/index')
  redirect(): void {
  }

  // 動的パラメータ
  @Get('id/:id')
  // パラメーター操作
  responseId(@Param() params: any): string{
    return params.id;
  }

  // Createテスト クライアントから受付
  @Post('create/random')
  createRandom(): Promise<TestModel> {
    const newTest: Prisma.TestCreateInput = { name: 'michel' };
    return this.appService.createRandom(newTest);
  }
}
