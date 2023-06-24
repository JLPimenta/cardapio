import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { CloseTableAccountUseCase } from '../use-cases/close-table-account';

export function makeCloseTableAccountUseCase() {
  const tableAccountRepository = new PrismaTableAccountRepository();

  return new CloseTableAccountUseCase(tableAccountRepository);
}
