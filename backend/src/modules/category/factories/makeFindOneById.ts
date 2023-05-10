import { PrismaCategoriesRepository } from '../repositories/prisma/prisma-categories-repository';
import { FindOneByIdUseCase } from '../use-cases/findOneById';

export function makeFindOneByIdUseCase() {
  const categoriesRepository = new PrismaCategoriesRepository();
  return new FindOneByIdUseCase(categoriesRepository);
}
