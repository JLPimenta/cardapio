import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { PrismaClientsRepository } from '../../client/repositories/prisma/prisma-clients-repository';
import { PrismaTableAccountRepository } from '../../table-account/repositories/prisma/prisma-table-account-repository';
import { CreateOrderUseCase } from '../use-cases/create-order';

export function makeCreateOrderUseCase() {
  const orderRepository = new PrismaOrderRepository();
  const clientRepository = new PrismaClientsRepository();
  const tableAccountRepository = new PrismaTableAccountRepository();

  return new CreateOrderUseCase(
    orderRepository,
    clientRepository,
    tableAccountRepository,
  );
}
