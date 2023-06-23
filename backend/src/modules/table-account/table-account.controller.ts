import { Body, Controller, Post } from '@nestjs/common';
import { makeCreateTableAccount } from './factories/makeCreateTableAccount';
import { CreateTableAccountDto } from './dto/create-table-account-dto';
import { TableAccount } from '@prisma/client';

@Controller('table-account')
export class TableAccountController {
  @Post()
  async create(
    @Body() createTableAccountDto: CreateTableAccountDto,
  ): Promise<TableAccount> {
    const createTableAccount = makeCreateTableAccount();

    return createTableAccount.execute(createTableAccountDto);
  }
}
