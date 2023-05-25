import { CreateProductDto } from '../dto/create-product-dto';
import { ProductsRepository } from '../repositories/products-repository';
import { CategoriesRepository } from '../../category/repositories/categories-repository';
import { ConflictException, NotFoundException } from '@nestjs/common';

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly categoryRepository: CategoriesRepository,
  ) {}

  async execute(product: CreateProductDto) {
    const productAlreadyExists = await this.productRepository.findByName(
      product.name,
    );

    const categoryAlredyExists = await this.categoryRepository.findOneById(
      product.categoryId,
    );

    if (productAlreadyExists) {
      throw new ConflictException('Product already exists');
    }

    if (!categoryAlredyExists) {
      throw new NotFoundException('Category not found!');
    }

    return this.productRepository.create(product);
  }
}
