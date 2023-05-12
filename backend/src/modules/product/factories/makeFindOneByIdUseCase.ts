import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { FindOneByIdUseCase } from '../use-cases/find-one-by-id';

export function makeFindOneByIdUseCase() {
  const productRepository = new PrismaProductsRepository();

  return new FindOneByIdUseCase(productRepository);
}
