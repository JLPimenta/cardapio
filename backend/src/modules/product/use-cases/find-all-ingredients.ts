import {
  ProductsRepository,
  ingredientsOnProducts,
} from '../repositories/products-repository';

import { NotFoundException } from '@nestjs/common';

export interface findOneByIdUseCaseResponse {
  ingredients: ingredientsOnProducts[];
}

export default class findAllIngredients {
  constructor(private readonly productRepository: ProductsRepository) {}

  async execute(id: string): Promise<findOneByIdUseCaseResponse> {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException(`Product with not found`);
    }

    const ingredients = await this.productRepository.findAllIngredients(id);

    return { ingredients };
  }
}
