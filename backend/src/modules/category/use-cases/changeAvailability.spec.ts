import { beforeEach, describe, expect, it } from 'vitest';
import { CategoriesRepository } from '../repositories/categories-repository';
import InMemoryCategoriesRepository from '../repositories/in-memory/in-memory-categories-repository';
import { ChangeAvailabilityUseCase } from './changeAvailability';

let categoriesRepository: CategoriesRepository;
let sut: ChangeAvailabilityUseCase;

describe('Change Availability Categories Use Case', () => {
  beforeEach(async () => {
    categoriesRepository = new InMemoryCategoriesRepository();
    sut = new ChangeAvailabilityUseCase(categoriesRepository);
  });

  it('should be able to update availability of a category', async () => {
    const category = await categoriesRepository.create({
      name: 'Lanches',
      isActive: true,
    });

    await sut.execute(category.id);

    expect(category).toEqual(expect.objectContaining({ isActive: false }));
  });
});
