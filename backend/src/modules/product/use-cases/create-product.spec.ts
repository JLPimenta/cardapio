import InMemoryCategoriesRepository from 'src/modules/category/repositories/in-memory/in-memory-categories-repository';
import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import { CreateProductUseCase } from './create-product';

let inMemoryProductsRepository: InMemoryProductsRepository;
let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let sut: CreateProductUseCase;

describe('Create products', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new CreateProductUseCase(
      inMemoryProductsRepository,
      inMemoryCategoriesRepository,
    );

    inMemoryProductsRepository.items.push(
      {
        id: 'product-1',
        categoryId: '1',
        createdAt: new Date(),
        description: 'Descrição',
        isActive: true,
        name: 'produto teste',
        price: '15.50',
        updatedAt: new Date(),
        urlImage: 'imagem',
      },
      {
        id: 'product-2',
        categoryId: '1',
        createdAt: new Date(),
        description: 'Descrição',
        isActive: true,
        name: 'produto teste',
        price: '15.50',
        updatedAt: new Date(),
        urlImage: 'imagem',
      },
    );
  });
  it('should be able to have a list of products created', async () => {
    expect(inMemoryProductsRepository.items).toHaveLength(2);
  });
});
