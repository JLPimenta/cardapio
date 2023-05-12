import { PrismaIngredientsRepository } from '../repositories/prisma/prisma-ingredients-repository';
import { GetIngredientsUseCase } from '../use-cases/get-ingredients';

export default function makeGetIngredientsUseCase() {
  const ingredientsRepository = new PrismaIngredientsRepository();
  const ingredients = new GetIngredientsUseCase(ingredientsRepository);

  return ingredients;
}
