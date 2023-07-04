import { Controller, Get } from '@nestjs/common';
import { PrismaTableRepository } from './repositories/prisma/prisma-table-repository';
import { PrismaService } from '../prisma/prisma.service';

const prismaService = new PrismaService();

@Controller('tables')
export class TableController {
  @Get()
  async findAll() {
    const tablesRepository = new PrismaTableRepository(prismaService);

    return await tablesRepository.findAll();
  }
}
