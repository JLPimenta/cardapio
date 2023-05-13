import { ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaIngredientsRepository } from '../../ingredient/repositories/prisma/prisma-ingredients-repository';
import { IngredientsParams } from '../dto/ingredients-params';
import { Category, Product } from '@prisma/client';

export async function validateCreateProductUseCase(
  ingredients: IngredientsParams[],
  product: Product,
  category: Category,
) {
  const ingredientsRepository = new PrismaIngredientsRepository();

  if (ingredients) {
    const ingredientsExists = await ingredientsRepository.findManyByIds(
      ingredients.map((ingredient) => ingredient.ingredientId),
    );

    if (ingredientsExists.length !== ingredients.length) {
      throw new NotFoundException('Ingredient not found.');
    }
  }
  if (!category) {
    throw new NotFoundException('Category not found.');
  }

  if (product) {
    throw new ConflictException('Product with this name already exists.');
  }
}
