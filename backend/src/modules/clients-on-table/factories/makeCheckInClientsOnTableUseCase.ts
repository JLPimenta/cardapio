import { PrismaClientsRepository } from 'src/modules/client/repositories/prisma/prisma-clients-repository';
import { PrismaClientsOnTablesRepository } from '../repositories/prisma/prisma-clients-on-tables-repository';
import { CheckInClientsOnTableUseCase } from '../use-cases/check-in';
import { PrismaTableRepository } from 'src/modules/table/repositories/prisma/prisma-table-repository';
import { PrismaTableAccountRepository } from 'src/modules/table-account/repositories/prisma/prisma-table-account-repository';

export function makeCheckInClientsOnTableUseCase() {
  const clientsOnTablesRepository = new PrismaClientsOnTablesRepository();
  const clientsRepository = new PrismaClientsRepository();
  const tablesRepository = new PrismaTableRepository();
  const tablesAccountRepository = new PrismaTableAccountRepository();

  return new CheckInClientsOnTableUseCase(
    clientsOnTablesRepository,
    clientsRepository,
    tablesRepository,
    tablesAccountRepository,
  );
}
