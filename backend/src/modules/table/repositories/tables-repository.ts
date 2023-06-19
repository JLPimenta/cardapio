import { Table } from '@prisma/client';
import { TableParams } from '../dto/TableParams';

export interface TablesRepository {
  create(table: TableParams): Promise<Table>;

  findAll(): Promise<Table[]>;

  findOneById(id: string): Promise<Table | null>;
}
