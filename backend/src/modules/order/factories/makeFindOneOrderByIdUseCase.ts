import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { FindOneByIdUseCase } from '../use-cases/find-one-by-id';

export function makeFindOneOrderByIdUseCase() {
  const orderRepository = new PrismaOrderRepository();

  return new FindOneByIdUseCase(orderRepository);
}
