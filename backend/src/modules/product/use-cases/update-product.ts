import {
  ProductsRepository,
  ingredientsOnProducts,
} from '../repositories/products-repository';
import { Product } from '@prisma/client';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UpdateProductDTO } from '../dto/update-product-dto';
import { CategoriesRepository } from 'src/modules/category/repositories/categories-repository';
import IngredientsRepository from 'src/modules/ingredient/repositories/ingredients-repository';

export interface UpdateProductUseCaseResponse {
  productUpdated: Product;
  ingredients: ingredientsOnProducts[];
}

export class UpdateProductUseCase {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly categoriesRepository: CategoriesRepository,
    private readonly ingredientsRepository: IngredientsRepository,
  ) {}

  async execute(
    id: string,
    data: UpdateProductDTO,
  ): Promise<UpdateProductUseCaseResponse> {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (data.isActive == undefined) {
      data.isActive = product.isActive;
    }

    if (data.name) {
      const product = await this.productRepository.findByName(data.name);

      if (product) {
        throw new ConflictException('Product with this name already exists.');
      }
    }

    if (data.ingredients) {
      for (const ingredient of data.ingredients) {
        const ingredientExists = await this.ingredientsRepository.findById(
          ingredient.ingredientId,
        );

        if (!ingredientExists) {
          throw new NotFoundException('Ingredient not found');
        }
      }
    }

    if (data.categoryId) {
      const category = await this.categoriesRepository.findOneById(
        data.categoryId,
      );

      if (!category) {
        throw new NotFoundException('Category not found');
      }
    }

    const productUpdated = await this.productRepository.update(id, data);
    const ingredients = await this.productRepository.findAllIngredients(
      product.id,
    );

    return { productUpdated, ingredients };
  }
}
