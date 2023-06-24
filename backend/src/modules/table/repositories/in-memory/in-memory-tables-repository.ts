import { Prisma, Table } from '@prisma/client';
import { TablesRepository } from '../tables-repository';
import { randomUUID } from 'crypto';

export class InMemoryTablesRepository implements TablesRepository {
  public items: Table[] = [];

  async create(data: Prisma.TableCreateInput) {
    const table = {
      id: data.id ?? randomUUID(),
      isActive: data.isActive ?? true,
      isAvailable: data.isAvailable ?? true,
      number: data.number,
    };

    this.items.push(table);

    return table;
  }

  async findAll() {
    return this.items.sort();
  }

  async findOneById(id: string) {
    const table = this.items.find((item) => item.id === id);

    return table;
  }
}
