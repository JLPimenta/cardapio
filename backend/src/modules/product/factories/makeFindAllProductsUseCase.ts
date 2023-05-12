import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import FindAllProductsUseCase from '../use-cases/find-all';

export function makeFindAllProductsUseCase() {
  const productRepository = new PrismaProductsRepository();

  return new FindAllProductsUseCase(productRepository);
}
