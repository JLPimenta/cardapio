import {
  ProductsRepository,
  ingredientsOnProducts,
} from '../repositories/products-repository';
import { Product } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

export interface findOneByIdUseCaseResponse {
  product: Product;
  ingredients: ingredientsOnProducts[];
}

export default class FindOneByIdUseCase {
  constructor(private readonly productRepository: ProductsRepository) {}

  async execute(id: string): Promise<findOneByIdUseCaseResponse> {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException(`Product with not found`);
    }

    const ingredients = await this.productRepository.findAllIngredients(
      product.id,
    );

    return { product, ingredients };
  }
}
