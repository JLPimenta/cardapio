import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { FindAllOrdersUseCase } from '../use-cases/find-all-orders';

export function makeFindAllOrdersUseCase() {
  const prismaService = new PrismaService();
  const orderRepository = new PrismaOrderRepository(prismaService);

  return new FindAllOrdersUseCase(orderRepository);
}
