import { CreateProductDto } from '../dto/create-product-dto';
import { ProductRepository } from '../repositories/product-repository';
import { ConflictException } from '@nestjs/common';

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: CreateProductDto) {
    const productAlreadyExists = await this.productRepository.findByName(
      product.name,
    );

    if (productAlreadyExists) {
      throw new ConflictException('Product with this name already exists.');
    }

    return this.productRepository.create(product);
  }
}
