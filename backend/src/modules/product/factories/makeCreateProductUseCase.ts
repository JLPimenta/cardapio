import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { CreateProductUseCase } from '../use-cases/create-product';
import { PrismaCategoriesRepository } from '../../category/repositories/prisma/prisma-categories-repository';

export function makeCreateProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const categoryRepository = new PrismaCategoriesRepository();

  return new CreateProductUseCase(productRepository, categoryRepository);
}
