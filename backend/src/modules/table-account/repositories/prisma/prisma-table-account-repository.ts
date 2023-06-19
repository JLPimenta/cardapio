import { TablesAccountRepository } from '../tables-account-repository';
import { PrismaClient, TableAccount } from '@prisma/client';
import { CreateTableAccountDto } from '../../dto/create-table-account-dto';
import { UpdateTableAccountDto } from '../../dto/update-table-account-dto';

const prisma = new PrismaClient();

export class PrismaTableAccountRepository implements TablesAccountRepository {
  async closeTableAccount(id: string): Promise<TableAccount> {
    return Promise.resolve(undefined);
  }

  async create(data: CreateTableAccountDto) {
    const tableAccount = await prisma.tableAccount.create({
      data: {
        title: data.title,
        totalTableAccount: data.totalTableAccount,
        openAt: data.openAt,
        closedAt: data.closedAt,
        tableId: data.tableId,
      },
    });

    return tableAccount;
  }

  async delete(id: string) {
    await prisma.tableAccount.delete({ where: { id } });
  }

  async findAll() {
    return Promise.resolve([]);
  }

  async findOneById(id: string) {
    const tableAccount = await prisma.tableAccount.findUnique({
      where: { id },
    });

    return tableAccount;
  }

  async update(id: string, tableAccount: UpdateTableAccountDto) {
    const updatedTableAccount = await prisma.tableAccount.update({
      where: { id },
      data: tableAccount,
    });

    return updatedTableAccount;
  }

  async existByTableId(tableId: string) {
    const tableAccount = await prisma.tableAccount.findFirst({
      where: {
        tableId: tableId,
        closedAt: null,
      },
    });

    return !!tableAccount;
  }
}
