import { NotFoundException } from '@nestjs/common';
import { ProductsRepository } from '../repositories/products-repository';
import { Product } from '@prisma/client';

export class ChangeProductAvailabilityUseCase {
  constructor(private readonly productRepository: ProductsRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.changeAvailability(id);

    await this.productRepository.save(product);

    return product;
  }
}
