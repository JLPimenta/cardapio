import { ProductRepository } from '../repositories/product-repository';
import { Product } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

export class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(page: number, limit: number): Promise<Product[]> {
    const product = await this.productRepository.findAll(page, limit);
    if (product.length === 0) {
      throw new NotFoundException(`No product found.`);
    }
    return product;
  }
}
