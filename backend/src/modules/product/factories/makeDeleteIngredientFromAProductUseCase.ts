import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { PrismaIngredientsRepository } from 'src/modules/ingredient/repositories/prisma/prisma-ingredients-repository';
import DeleteIngredientFromAProductUseCase from '../use-cases/delete-ingredient-from-a-product';

export function makeDeleteIngredientFromAProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const ingredientsRepository = new PrismaIngredientsRepository();

  const deleteIngredientFromAProductUseCase =
    new DeleteIngredientFromAProductUseCase(
      productRepository,

      ingredientsRepository,
    );

  return deleteIngredientFromAProductUseCase;
}
