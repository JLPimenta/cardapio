import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { ChangeProductAvailabilityUseCase } from '../use-cases/change-product-availability';

export function makeChangeProductAvailabilityUseCase() {
  const prismaService = new PrismaService();
  const productRepository = new PrismaProductsRepository(prismaService);

  return new ChangeProductAvailabilityUseCase(productRepository);
}
