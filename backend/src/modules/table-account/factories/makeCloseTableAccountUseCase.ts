import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { CloseTableAccountUseCase } from '../use-cases/close-table-account';

export function makeCloseTableAccountUseCase() {
  const prismaService = new PrismaService();
  const tableAccountRepository = new PrismaTableAccountRepository(
    prismaService,
  );

  return new CloseTableAccountUseCase(tableAccountRepository);
}
