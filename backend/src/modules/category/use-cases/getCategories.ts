import { CategoriesRepository } from '../repositories/categories-repository';

export class GetCategoriesUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute() {
    const categories = await this.categoriesRepository.findAll();

    return categories;
  }
}
