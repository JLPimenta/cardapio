import { Injectable } from '@nestjs/common';
import { TablesAccountRepository } from '../tables-account-repository';
import { Prisma, PrismaClient, TableAccount } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PrismaTableAccountRepository implements TablesAccountRepository {
  async closeTableAccount(id: string): Promise<TableAccount> {
    const tableAccount = await prisma.tableAccount.update({
      where: { id },
      data: { closedAt: new Date() },
    });

    return tableAccount;
  }

  async create(
    data: Prisma.TableAccountUncheckedCreateInput,
  ): Promise<TableAccount> {
    const tableAccount = await prisma.tableAccount.create({ data });

    return tableAccount;
  }

  async delete(id: string) {
    await prisma.tableAccount.delete({ where: { id } });
  }

  async findAll() {
    const tableAccounts = await prisma.tableAccount.findMany();

    return tableAccounts;
  }

  async findByTableId(tableId: string): Promise<TableAccount> {
    const tableAccount = await prisma.tableAccount.findFirst({
      where: {
        tableId: tableId,
        closedAt: null,
      },
    });

    return tableAccount;
  }

  async findOneById(id: string) {
    const tableAccount = await prisma.tableAccount.findUnique({
      where: { id },
    });

    return tableAccount;
  }

  async update(
    id: string,
    data: Prisma.TableAccountUncheckedUpdateInput,
  ): Promise<TableAccount> {
    const updatedTableAccount = await prisma.tableAccount.update({
      where: { id },
      data,
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

    return tableAccount;
  }
}
