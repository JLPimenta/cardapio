import { PrismaClientsRepository } from 'src/modules/client/repositories/prisma/prisma-clients-repository';
import { PrismaClientsOnTablesRepository } from '../repositories/prisma/prisma-clients-on-tables-repository';
import { CheckInClientsOnTableUseCase } from '../use-cases/check-in';
import { PrismaTableRepository } from 'src/modules/table/repositories/prisma/prisma-table-repository';
import { PrismaTableAccountRepository } from 'src/modules/table-account/repositories/prisma/prisma-table-account-repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export function makeCheckInClientsOnTableUseCase() {
  const prismaService = new PrismaService();
  const clientsOnTablesRepository = new PrismaClientsOnTablesRepository(
    prismaService,
  );
  const clientsRepository = new PrismaClientsRepository(prismaService);
  const tablesRepository = new PrismaTableRepository(prismaService);
  const tablesAccountRepository = new PrismaTableAccountRepository(
    prismaService,
  );

  return new CheckInClientsOnTableUseCase(
    clientsOnTablesRepository,
    clientsRepository,
    tablesRepository,
    tablesAccountRepository,
  );
}
