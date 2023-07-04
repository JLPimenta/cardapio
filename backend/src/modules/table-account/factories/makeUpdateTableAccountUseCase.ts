import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { UpdateTableAccountUseCase } from '../use-cases/update-table-account';

export function makeUpdateTableAccountUseCase() {
  const prismaService = new PrismaService();
  const tableAccountRepository = new PrismaTableAccountRepository(
    prismaService,
  );

  return new UpdateTableAccountUseCase(tableAccountRepository);
}
