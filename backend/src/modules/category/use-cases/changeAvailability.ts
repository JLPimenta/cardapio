import { NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories-repository';

export class ChangeAvailabilityUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(categodyId: string) {
    const category = await this.categoriesRepository.findOneById(categodyId);

    if (!category) {
      throw new NotFoundException('Category not found.');
    }

    return await this.categoriesRepository.changeAvailability(category.id);
  }
}
