import { TablesAccountRepository } from '../repositories/tables-account-repository';
import { ConflictException } from '@nestjs/common';
import { TablesRepository } from '../../table/repositories/tables-repository';

export class CreateTableAccount {
  constructor(
    private readonly tableAccountRepository: TablesAccountRepository,
    private readonly tableRepository: TablesRepository,
  ) {}

  async execute(data) {
    const alreadyExistTableAccount =
      await this.tableAccountRepository.existByTableId(data.tableId);

    const existTable = await this.tableRepository.findOneById(data.tableId);

    if (existTable === null) {
      throw new ConflictException('This table does not exist.');
    }

    if (alreadyExistTableAccount === true) {
      throw new ConflictException(
        'A open account to this table already exists.',
      );
    }
    if (data.totalTableAccount < 0) {
      throw new ConflictException(
        'The total of table account must be greater than 0.',
      );
    }

    return await this.tableAccountRepository.create(data);
  }
}
