import { Prisma, TableAccount } from '@prisma/client';

export interface TablesAccountRepository {
  create(data: Prisma.TableAccountUncheckedCreateInput): Promise<TableAccount>;

  update(
    id: string,
    tableAccount: Prisma.TableAccountUncheckedUpdateInput,
  ): Promise<TableAccount>;

  findAll(): Promise<TableAccount[]>;

  findOneById(id: string): Promise<TableAccount | null>;

  closeTableAccount(id: string): Promise<TableAccount>;

  delete(id: string): void;

  existByTableId(tableId: string): Promise<boolean>;
}
