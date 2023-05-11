import { ConflictException } from '@nestjs/common';
import { PrismaIngredientsRepository } from '../../ingredient/repositories/prisma/prisma-ingredients-repository';

export async function validateCreateProductUseCase(
  ingredients,
  product,
  category,
) {
  const ingredientsRepository = new PrismaIngredientsRepository();

  if (ingredients) {
    const ingredientsExists = await ingredientsRepository.findManyByIds(
      ingredients.map((ingredient) => ingredient.ingredientId),
    );

    if (ingredientsExists.length !== ingredients.length) {
      throw new ConflictException('Ingredient not found.');
    }
  }
  if (!category) {
    throw new ConflictException('Category not found.');
  }

  if (product) {
    throw new ConflictException('Product with this name already exists.');
  }
}
