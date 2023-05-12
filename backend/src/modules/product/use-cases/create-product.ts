import { CreateProductDto } from '../dto/create-product-dto';
import { ProductsRepository } from '../repositories/products-repository';
import { CategoriesRepository } from '../../category/repositories/categories-repository';
import { validateCreateProductUseCase } from '../utils/validateCreateProductUseCase';

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly categoryRepository: CategoriesRepository,
  ) {}

  async execute(product: CreateProductDto) {
    const { name, categoryId, ingredients } = product;

    const [productAlreadyExists, categoryExists] = await Promise.all([
      this.productRepository.findByName(name),
      this.categoryRepository.findOneById(categoryId),
    ]);

    await validateCreateProductUseCase(
      ingredients,
      productAlreadyExists,
      categoryExists,
    );

    return this.productRepository.create(product);
  }
}
