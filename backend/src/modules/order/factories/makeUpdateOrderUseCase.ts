import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { PrismaClientsRepository } from '../../client/repositories/prisma/prisma-clients-repository';
import { PrismaTableAccountRepository } from '../../table-account/repositories/prisma/prisma-table-account-repository';
import { UpdateOrderUseCase } from '../use-case/update-order';

export function makeUpdateOrderUseCase() {
  const orderRepository = new PrismaOrderRepository();
  const clientRepository = new PrismaClientsRepository();
  const tableAccountRepository = new PrismaTableAccountRepository();

  return new UpdateOrderUseCase(
    orderRepository,
    clientRepository,
    tableAccountRepository,
  );
}
