import { ProductRepository } from '../repositories/product-repository';
import { FilterProductDto } from '../dto/filter-product-dto';

export class FilterProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(filter: FilterProductDto, page: number, limit: number) {
    const { name, isActive } = filter;

    const product = await this.productRepository.searchProduct(
      name,
      isActive,
      page,
      limit,
    );

    return product;
  }
}
