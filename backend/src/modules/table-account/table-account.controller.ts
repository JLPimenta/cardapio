import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { makeCreateTableAccountUseCase } from './factories/makeCreateTableAccountUseCase';
import { CreateTableAccountDto } from './dto/create-table-account-dto';
import { PrismaClient, TableAccount } from '@prisma/client';
import { UpdateTableAccountDto } from './dto/update-table-account-dto';
import { makeUpdateTableAccountUseCase } from './factories/makeUpdateTableAccountUseCase';
import { makeCloseTableAccountUseCase } from './factories/makeCloseTableAccountUseCase';

@Controller('table-account')
export class TableAccountController {
  @Post()
  async create(
    @Body() createTableAccountDto: CreateTableAccountDto,
  ): Promise<TableAccount> {
    const createTableAccountUseCase = makeCreateTableAccountUseCase();

    return createTableAccountUseCase.execute(createTableAccountDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTableAccountDto,
  ): Promise<TableAccount> {
    const updateTableAccountUseCase = makeUpdateTableAccountUseCase();

    return updateTableAccountUseCase.execute(id, data);
  }

  @Patch(':id')
  async closeTableAccount(@Param('id') id: string): Promise<TableAccount> {
    const closeTableAccountUseCase = makeCloseTableAccountUseCase();

    return closeTableAccountUseCase.execute(id);
  }

  @Get(':id')
  async getTableAccount(@Param('tableId') tableId: string) {
    const prisma = new PrismaClient();

    const tableAccount = await prisma.tableAccount.findFirst({
      where: { tableId },
    });

    await prisma.$disconnect();

    return tableAccount;
  }
}
