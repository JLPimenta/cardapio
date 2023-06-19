import { TablesRepository } from '../tables-repository';
import { TableParams } from '../../dto/TableParams';
import { PrismaClient, Table } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaTableRepository implements TablesRepository {
  async create(table: TableParams): Promise<Table> {
    return Promise.resolve(undefined);
  }

  async findAll(): Promise<Table[]> {
    return Promise.resolve([]);
  }

  async findOneById(id: string) {
    const table = await prisma.table.findUnique({
      where: { id },
    });

    return table;
  }
}
