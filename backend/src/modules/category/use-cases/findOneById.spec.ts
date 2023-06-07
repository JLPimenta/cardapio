import { beforeEach, describe, expect, it } from 'vitest';
import { CategoriesRepository } from '../repositories/categories-repository';
import InMemoryCategoriesRepository from '../repositories/in-memory/in-memory-categories-repository';
import { FindOneByIdUseCase } from './findOneById';

let categoriesRepository: CategoriesRepository;
let sut: FindOneByIdUseCase;

describe('Get categoriy by ID use case', () => {
  beforeEach(async () => {
    categoriesRepository = new InMemoryCategoriesRepository();
    sut = new FindOneByIdUseCase(categoriesRepository);
  });

  it('should be able to get one category by id', async () => {
    const category = await categoriesRepository.create({
      name: 'Lanches',
      isActive: true,
    });
    await sut.execute(category.id);

    expect(category).toEqual(
      expect.objectContaining({ id: category.id, name: 'Lanches' }),
    );
  });
});
