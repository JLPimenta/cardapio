import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { ChangeStatusOrderUseCase } from '../use-cases/change-status';

export function makeChangeStatusUseCase() {
  const prismaService = new PrismaService();

  const orderRepository = new PrismaOrderRepository(prismaService);

  return new ChangeStatusOrderUseCase(orderRepository);
}
