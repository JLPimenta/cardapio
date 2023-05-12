import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { ChangeProductAvailabilityUseCase } from '../use-cases/change-product-availability';

export function makeChangeProductAvailabilityUseCase() {
  const productRepository = new PrismaProductsRepository();

  return new ChangeProductAvailabilityUseCase(productRepository);
}
