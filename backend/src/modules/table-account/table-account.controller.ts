import { Controller, Post } from '@nestjs/common';
import { makeCreateTableAccount } from './factories/makeCreateTableAccount';
import { CreateTableAccountDto } from './dto/create-table-account-dto';

@Controller('table-account')
export class TableAccountController {
  @Post()
  async create(createTableAccountDto: CreateTableAccountDto) {
    const createTableAccount = makeCreateTableAccount();

    return createTableAccount.execute(createTableAccountDto);
  }
}
