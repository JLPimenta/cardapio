import { PrismaCategoriesRepository } from '../repositories/prisma/prisma-categories-repository';
import { ChangeAvailabilityUseCase } from '../use-cases/changeAvailability';

export function makeChangeAvailabilityUseCase() {
  const categoriesRepository = new PrismaCategoriesRepository();
  return new ChangeAvailabilityUseCase(categoriesRepository);
}
