import { Prisma, Table } from '@prisma/client';
import { TableParams } from '../dto/TableParams';

export interface TablesRepository {
  create(data: Prisma.TableCreateInput): Promise<Table>;

  findAll(): Promise<Table[]>;

  findOneById(id: string): Promise<Table | null>;
}
