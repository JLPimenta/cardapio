import { PrismaProductRepository } from '../repositories/prisma/prisma-product-repository';
import { CreateProductUseCase } from '../use-cases/createProduct';

export function makeCreateProductUseCase() {
  const productRepository = new PrismaProductRepository();

  return new CreateProductUseCase(productRepository);
}
