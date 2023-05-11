import { NotFoundException } from '@nestjs/common';
import IngredientsRepository from '../repositories/ingredients-repository';

interface GetIngredientByIdUseCaseRequest {
  ingredientId: string;
}

export class GetIngredientByIdUseCase {
  constructor(private readonly ingredientsRepository: IngredientsRepository) {}

  async execute({ ingredientId }: GetIngredientByIdUseCaseRequest) {
    const ingredient = await this.ingredientsRepository.findById(ingredientId);

    if (!ingredient) {
      throw new NotFoundException('Ingredient not found');
    }

    return ingredient;
  }
}
