import { CategoriesRepository } from '../repositories/categories-repository';
import { ResourceNotFound } from 'src/shared/errors/notFoundError';

export class FindOneByIdUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(categodyId: string) {
    const category = await this.categoriesRepository.findOneById(categodyId);

    if (!category) {
      throw new ResourceNotFound();
    }

    return category;
  }
}
