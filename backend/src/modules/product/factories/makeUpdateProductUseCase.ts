import { PrismaCategoriesRepository } from 'src/modules/category/repositories/prisma/prisma-categories-repository';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { UpdateProductUseCase } from '../use-cases/update-product';

export function makeUpdateProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const categoriesRepository = new PrismaCategoriesRepository();

  const updateProductUseCase = new UpdateProductUseCase(
    productRepository,
    categoriesRepository,
  );

  return updateProductUseCase;
}
