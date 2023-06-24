import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { CreateTableAccountUseCase } from '../use-cases/create-table-account';
import { PrismaTableRepository } from '../../table/repositories/prisma/prisma-table-repository';

export function makeCreateTableAccountUseCase() {
  const tableAccountRepository = new PrismaTableAccountRepository();
  const tableRepository = new PrismaTableRepository();

  return new CreateTableAccountUseCase(tableAccountRepository, tableRepository);
}
