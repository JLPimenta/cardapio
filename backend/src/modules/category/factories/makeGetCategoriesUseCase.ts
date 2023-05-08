import { PrismaCategoriesRepository } from '../repositories/prisma/prisma-categories-repository';
import { GetCategoriesUseCase } from '../use-cases/getCategories';

export function makeGetCategoriesUseCase() {
  const categoriesRepository = new PrismaCategoriesRepository();
  return new GetCategoriesUseCase(categoriesRepository);
}
