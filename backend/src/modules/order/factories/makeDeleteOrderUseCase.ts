import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { DeleteOrderUseCase } from '../use-cases/delete-order';

export function makeDeleteOrderUseCase() {
  const prismaService = new PrismaService();
  const orderRepository = new PrismaOrderRepository(prismaService);

  return new DeleteOrderUseCase(orderRepository);
}
