import { Injectable } from '@nestjs/common';
import { TablesRepository } from '../tables-repository';
import { Prisma, Table } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PrismaTableRepository implements TablesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.TableCreateInput): Promise<Table> {
    const table = await this.prisma.table.create({ data });

    return table;
  }

  async findAll(): Promise<Table[]> {
    return await this.prisma.table.findMany();
  }

  async findOneById(id: string) {
    const table = await this.prisma.table.findUnique({
      where: { id },
    });

    return table;
  }
}
