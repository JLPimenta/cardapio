import { ProductRepository } from '../repositories/product-repository';
import { Product } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

export class ChangeProductAvailabilityUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return await this.productRepository.changeAvailability(id);
  }
}
