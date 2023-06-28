import { Controller, Get } from '@nestjs/common';
import { PrismaTableRepository } from './repositories/prisma/prisma-table-repository';

@Controller('tables')
export class TableController {
  @Get()
  async findAll() {
    const tablesRepository = new PrismaTableRepository();

    return await tablesRepository.findAll();
  }
}
