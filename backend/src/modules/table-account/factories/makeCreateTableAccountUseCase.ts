import { PrismaTableAccountRepository } from '../repositories/prisma/prisma-table-account-repository';
import { CreateTableAccountUseCase } from '../use-cases/create-table-account';
import { PrismaTableRepository } from '../../table/repositories/prisma/prisma-table-repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export function makeCreateTableAccountUseCase() {
  const prismaService = new PrismaService();
  const tableAccountRepository = new PrismaTableAccountRepository(
    prismaService,
  );
  const tableRepository = new PrismaTableRepository(prismaService);

  return new CreateTableAccountUseCase(tableAccountRepository, tableRepository);
}
