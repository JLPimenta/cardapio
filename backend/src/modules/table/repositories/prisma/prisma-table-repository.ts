import { Injectable } from '@nestjs/common';
import { TablesRepository } from '../tables-repository';
import { Prisma, PrismaClient, Table } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PrismaTableRepository implements TablesRepository {
  async create(data: Prisma.TableCreateInput): Promise<Table> {
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
