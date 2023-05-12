import { ProductsRepository } from '../repositories/products-repository';
import { FilterProductDto } from '../dto/filter-product-dto';

export default class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductsRepository) {}

  async execute({ isActive, name, categoryId }: FilterProductDto) {
    const product = await this.productRepository.findAll(
      name,
      isActive,
      categoryId,
    );

    return product;
  }
}
