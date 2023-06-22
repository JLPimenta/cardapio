import {
  FindAllProductsParams,
  ProductsRepository,
} from '../repositories/products-repository';

export default class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductsRepository) {}

  async execute({ categoryId }: FindAllProductsParams) {
    const products = await this.productRepository.findAll({
      categoryId,
    });

    return products;
  }
}
