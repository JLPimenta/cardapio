import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { ChangeStatusOrderUseCase } from '../use-case/change-status';

export function makeChangeStatusUseCase() {
  const orderRepository = new PrismaOrderRepository();

  return new ChangeStatusOrderUseCase(orderRepository);
}