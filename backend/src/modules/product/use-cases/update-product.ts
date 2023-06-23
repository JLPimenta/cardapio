import { ProductsRepository } from '../repositories/products-repository';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UpdateProductDTO } from '../dto/update-product-dto';
import { CategoriesRepository } from 'src/modules/category/repositories/categories-repository';

export class UpdateProductUseCase {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly categoriesRepository: CategoriesRepository,
  ) {}

  async execute(id: string, data: UpdateProductDTO) {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (data.name) {
      const product = await this.productRepository.findByName(data.name);

      if (product) {
        throw new ConflictException('Product with this name already exists.');
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

    await this.productRepository.save(productUpdated);

    return productUpdated;
  }
}
