import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import DeleteProductUseCase from '../use-cases/delete-product';

export function makeDeleteProductUseCase() {
  const productRepository = new PrismaProductsRepository();

  return new DeleteProductUseCase(productRepository);
}
