import { TablesAccountRepository } from '../repositories/tables-account-repository';
import { ConflictException } from '@nestjs/common';
import { TablesRepository } from '../../table/repositories/tables-repository';
import { Prisma } from '@prisma/client';

export class CreateTableAccountUseCase {
  constructor(
    private readonly tableAccountRepository: TablesAccountRepository,
    private readonly tableRepository: TablesRepository,
  ) {}

  async execute(data: Prisma.TableAccountUncheckedCreateInput) {
    const alreadyExistTableAccount =
      await this.tableAccountRepository.existByTableId(data.tableId);

    const existTable = await this.tableRepository.findOneById(data.tableId);

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

    return await this.tableAccountRepository.create(data);
  }
}
