import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaOrderRepository } from '../repository/prisma/prisma-order-repository';
import { FindOneByIdUseCase } from '../use-cases/find-one-by-id';

export function makeFindOneOrderByIdUseCase() {
  const prismaService = new PrismaService();
  const orderRepository = new PrismaOrderRepository(prismaService);

  return new FindOneByIdUseCase(orderRepository);
}
