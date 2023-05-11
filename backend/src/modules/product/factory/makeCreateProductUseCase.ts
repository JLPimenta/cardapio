import { PrismaProductRepository } from '../repositories/prisma/prisma-product-repository';
import { CreateProductUseCase } from '../use-cases/create-product';
import { PrismaCategoriesRepository } from '../../category/repositories/prisma/prisma-categories-repository';

export function makeCreateProductUseCase() {
  const productRepository = new PrismaProductRepository();
  const categoryRepository = new PrismaCategoriesRepository();

  return new CreateProductUseCase(productRepository, categoryRepository);
}
