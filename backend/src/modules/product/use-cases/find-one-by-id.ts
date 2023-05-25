import { ProductsRepository } from '../repositories/products-repository';

import { NotFoundException } from '@nestjs/common';

export default class FindOneByIdUseCase {
  constructor(private readonly productRepository: ProductsRepository) {}

  async execute(id: string) {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException(`Product not found`);
    }

    return product;
  }
}
