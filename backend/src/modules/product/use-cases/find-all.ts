import { ProductRepository } from '../repositories/product-repository';
import { FilterProductDto } from '../dto/filter-product-dto';

export default class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({ isActive, name, categoryId }: FilterProductDto) {
    const product = await this.productRepository.findAll(
      name,
      isActive,
      categoryId,
    );

    return product;
  }
}
