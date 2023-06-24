import { TablesAccountRepository } from '../repositories/tables-account-repository';
import { ConflictException } from '@nestjs/common';
import { TablesRepository } from '../../table/repositories/tables-repository';
import { Prisma } from '@prisma/client';

export class CreateTableAccountUseCase {
  constructor(
    private readonly tablesAccountRepository: TablesAccountRepository,
    private readonly tablesRepository: TablesRepository,
  ) {}

  async execute(data: Prisma.TableAccountUncheckedCreateInput) {
    const alreadyExistTableAccount =
      await this.tablesAccountRepository.existByTableId(data.tableId);

    const existTable = await this.tablesRepository.findOneById(data.tableId);

    if (!existTable) {
      throw new ConflictException('This table does not exist.');
    }

    if (alreadyExistTableAccount) {
      throw new ConflictException(
        'A open account to this table already exists.',
      );
    }

    if (!data.totalTableAccount) {
      throw new ConflictException(
        'The total of table account must be greater than 0.',
      );
    }

    return await this.tablesAccountRepository.create(data);
  }
}
