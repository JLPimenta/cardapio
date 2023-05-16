import IngredientsRepository from 'src/modules/ingredient/repositories/ingredients-repository';
import { ProductsRepository } from '../repositories/products-repository';
import { NotFoundException } from '@nestjs/common';

export interface DeleteIngredientOnProductRequest {
  ingredientId: string;
  productId: string;
}

export default class DeleteIngredientFromAProductUseCase {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly ingredientsRepository: IngredientsRepository,
  ) {}

  async execute({ ingredientId, productId }: DeleteIngredientOnProductRequest) {
    const product = await this.productRepository.findOneById(productId);

    if (!product) {
      throw new NotFoundException(`Product not found`);
    }

    const ingredient = await this.ingredientsRepository.findById(ingredientId);

    if (!ingredient) {
      throw new NotFoundException(`Ingredient not found`);
    }

    const ingredients = await this.productRepository.findAllIngredients(
      product.id,
    );

    for (const ingredient of ingredients) {
      if (ingredient.ingredientid !== ingredientId) {
        throw new NotFoundException('Ingredient not in the product');
      }
    }

    return this.productRepository.deleteIngredient({ ingredientId, productId });
  }
}
