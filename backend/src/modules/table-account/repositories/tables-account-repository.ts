import { CreateTableAccountDto } from '../dto/create-table-account-dto';
import { TableAccount } from '@prisma/client';
import { UpdateTableAccountDto } from '../dto/update-table-account-dto';

export interface TablesAccountRepository {
  create(data: CreateTableAccountDto): Promise<TableAccount>;

  update(
    id: string,
    tableAccount: UpdateTableAccountDto,
  ): Promise<TableAccount>;

  findAll(): Promise<TableAccount[]>;

  findOneById(id: string): Promise<TableAccount | null>;

  closeTableAccount(id: string): Promise<TableAccount>;

  delete(id: string): void;

  existByTableId(tableId: string): Promise<boolean>;
}
