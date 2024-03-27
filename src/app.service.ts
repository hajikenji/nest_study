import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { Test, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getIndex(): string {
    return 'Hello World?';
  }

  responseNew(): string {
    return 'Hello World...';
  }

  // createテスト DB操作
  async createRandom(data: Prisma.TestCreateInput): Promise<Test> {
    return this.prisma.test.create({ data });
  }
}
