import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { CreateTableAccount } from '../use-cases/create-table-account';
import { PrismaTableRepository } from '../../table/repositories/prisma/prisma-table-repository';

export function makeCreateTableAccount() {
  const tableAccountRepository = new PrismaTableAccountRepository();
  const tableRepository = new PrismaTableRepository();

  return new CreateTableAccount(tableAccountRepository, tableRepository);
}
