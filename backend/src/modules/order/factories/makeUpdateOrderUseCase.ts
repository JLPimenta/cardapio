import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { PrismaClientsRepository } from '../../client/repositories/prisma/prisma-clients-repository';
import { PrismaTableAccountRepository } from '../../table-account/repositories/prisma/prisma-table-account-repository';
import { UpdateOrderUseCase } from '../use-cases/update-order';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export function makeUpdateOrderUseCase() {
  const prismaService = new PrismaService();
  const orderRepository = new PrismaOrderRepository(prismaService);
  const clientRepository = new PrismaClientsRepository(prismaService);
  const tableAccountRepository = new PrismaTableAccountRepository(
    prismaService,
  );

  return new UpdateOrderUseCase(
    orderRepository,
    clientRepository,
    tableAccountRepository,
  );
}
