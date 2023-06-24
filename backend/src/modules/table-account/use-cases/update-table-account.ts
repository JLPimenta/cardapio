import { TablesAccountRepository } from '../repositories/tables-account-repository';
import { Prisma } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

export class UpdateTableAccountUseCase {
  constructor(
    private readonly tablesAccountRepository: TablesAccountRepository,
  ) {}

  async execute(id: string, data: Prisma.TableAccountUncheckedUpdateInput) {
    const tableAccount = await this.tablesAccountRepository.findOneById(id);

    if (!tableAccount) {
      throw new NotFoundException('Table Account not found');
    }

    return await this.tablesAccountRepository.update(id, data);
  }
}
