import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import findAllIngredients from '../use-cases/find-all-ingredients';

export function makeFindAllIngredientsUseCase() {
  const productRepository = new PrismaProductsRepository();

  return new findAllIngredients(productRepository);
}
