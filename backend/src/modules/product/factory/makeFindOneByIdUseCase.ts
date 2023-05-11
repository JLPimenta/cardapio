import { PrismaProductRepository } from '../repositories/prisma/prisma-product-repository';
import { FindOneByIdUseCase } from '../use-cases/find-one-by-id';

export function makeFindOneByIdUseCase() {
  const productRepository = new PrismaProductRepository();

  return new FindOneByIdUseCase(productRepository);
}
