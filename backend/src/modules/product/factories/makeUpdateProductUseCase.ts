import { PrismaCategoriesRepository } from 'src/modules/category/repositories/prisma/prisma-categories-repository';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { UpdateProductUseCase } from '../use-cases/update-product';
import { PrismaIngredientsRepository } from 'src/modules/ingredient/repositories/prisma/prisma-ingredients-repository';

export function makeUpdateProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const categoriesRepository = new PrismaCategoriesRepository();
  const ingredientsRepository = new PrismaIngredientsRepository();

  const updateProductUseCase = new UpdateProductUseCase(
    productRepository,
    categoriesRepository,
    ingredientsRepository,
  );

  return updateProductUseCase;
}
