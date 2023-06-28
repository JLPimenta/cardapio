import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { DeleteOrderUseCase } from '../use-case/delete-order';

export function makeDeleteOrderUseCase() {
  const orderRepository = new PrismaOrderRepository();

  return new DeleteOrderUseCase(orderRepository);
}
