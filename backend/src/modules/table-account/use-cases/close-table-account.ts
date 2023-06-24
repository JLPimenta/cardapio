import { TablesAccountRepository } from '../repositories/tables-account-repository';
import { NotFoundException } from '@nestjs/common';

export class CloseTableAccountUseCase {
  constructor(
    private readonly tablesAccountRepository: TablesAccountRepository,
  ) {}

  async execute(id: string) {
    const tableAccount = await this.tablesAccountRepository.findOneById(id);

    if (!tableAccount) {
      throw new NotFoundException('Table Account not found');
    }

    return await this.tablesAccountRepository.closeTableAccount(id);
  }
}
