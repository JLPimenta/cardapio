import { Prisma, TableAccount } from '@prisma/client';
import { TablesAccountRepository } from '../tables-account-repository';
import { randomUUID } from 'crypto';

export class InMemoryTablesAccountRepository
  implements TablesAccountRepository
{
  public items: TableAccount[] = [];

  async create(data: Prisma.TableAccountUncheckedCreateInput) {
    const tableAccount = {
      id: data.id ?? randomUUID(),
      openAt: new Date(),
      tableId: data.tableId,
      totalTableAccount: data.totalTableAccount,
      title: data.title,
      closedAt: undefined,
    };

    this.items.push(tableAccount);

    return tableAccount;
  }

  async update(id: string, data: Prisma.TableAccountUncheckedUpdateInput) {
    const tableAccount = await this.findOneById(id);

    data.totalTableAccount
      ? (tableAccount.totalTableAccount = data.totalTableAccount.toString())
      : undefined;

    return tableAccount;
  }

  async findAll() {
    return this.items.sort();
  }

  async findOneById(id: string) {
    const tableAccount = this.items.find((item) => item.id === id);

    return tableAccount;
  }

  async closeTableAccount(id: string) {
    const tableAccount = await this.findOneById(id);

    tableAccount.closedAt = new Date();

    return tableAccount;
  }

  async delete(id: string) {
    const tableAccountIndex = this.items.findIndex((item) => item.id === id);

    this.items.splice(tableAccountIndex, 1);
  }

  async existByTableId(tableId: string) {
    const tableAccount = this.items.find((item) => item.tableId === tableId);

    return tableAccount;
  }
}
