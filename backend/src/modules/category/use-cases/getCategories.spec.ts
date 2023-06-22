import { CategoriesRepository } from '../repositories/categories-repository';
import { GetCategoriesUseCase } from './getCategories';
import InMemoryCategoriesRepository from '../repositories/in-memory/in-memory-categories-repository';

let categoriesRepository: CategoriesRepository;
let sut: GetCategoriesUseCase;

describe('Get ategories use case', () => {
  beforeEach(async () => {
    categoriesRepository = new InMemoryCategoriesRepository();
    sut = new GetCategoriesUseCase(categoriesRepository);
  });

  it('should be able to get categories', async () => {
    await categoriesRepository.create({
      name: 'Lanches',
      isActive: true,
    });

    await categoriesRepository.create({
      name: 'Bebidas',
      isActive: true,
    });

    const categories = await sut.execute();

    expect(categories).toHaveLength(2);

    expect(categories).toEqual([
      expect.objectContaining({ name: 'Lanches' }),
      expect.objectContaining({ name: 'Bebidas' }),
    ]);
  });
});
