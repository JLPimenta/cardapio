import { ProductRepository } from '../repositories/products-repository';
import { Product } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

export class FindOneByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findOneById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }
}
