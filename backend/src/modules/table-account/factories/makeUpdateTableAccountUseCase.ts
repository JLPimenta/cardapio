import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { UpdateTableAccountUseCase } from '../use-cases/update-table-account';

export function makeUpdateTableAccountUseCase() {
  const tableAccountRepository = new PrismaTableAccountRepository();

  return new UpdateTableAccountUseCase(tableAccountRepository);
}
