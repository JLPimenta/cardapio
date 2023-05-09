import { CategoriesRepository } from '../repositories/categories-repository';

export class ChangeAvailabilityUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(categodyId: string) {
    const category = await this.categoriesRepository.changeAvailability(
      categodyId,
    );

    return category;
  }
}
