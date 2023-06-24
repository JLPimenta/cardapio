import { Prisma, Table } from '@prisma/client';

export interface TablesRepository {
  create(data: Prisma.TableCreateInput): Promise<Table>;

  findAll(): Promise<Table[]>;

  findOneById(id: string): Promise<Table | null>;
}
