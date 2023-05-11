import { PrismaProductRepository } from '../repositories/prisma/prisma-product-repository';
import { FindAllProductsUseCase } from '../use-cases/find-all';

export function makeFindAllProductsUseCase() {
  const productRepository = new PrismaProductRepository();

  return new FindAllProductsUseCase(productRepository);
}
