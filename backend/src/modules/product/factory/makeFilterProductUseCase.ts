import { PrismaProductRepository } from '../repositories/prisma/prisma-product-repository';
import { FilterProductUseCase } from '../use-cases/filter-product';

export function makeFilterProductUseCase() {
  const productRepository = new PrismaProductRepository();

  return new FilterProductUseCase(productRepository);
}
