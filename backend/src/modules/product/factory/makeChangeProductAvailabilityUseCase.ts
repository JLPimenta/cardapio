import { PrismaProductRepository } from '../repositories/prisma/prisma-product-repository';
import { ChangeProductAvailabilityUseCase } from '../use-cases/change-product-availability';

export function makeChangeProductAvailabilityUseCase() {
  const productRepository = new PrismaProductRepository();

  return new ChangeProductAvailabilityUseCase(productRepository);
}
