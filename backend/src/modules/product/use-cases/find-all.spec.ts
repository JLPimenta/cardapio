import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import FindAllProductsUseCase from './find-all';

let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: FindAllProductsUseCase;

describe('Find all products', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new FindAllProductsUseCase(inMemoryProductsRepository);

    inMemoryProductsRepository.items.push(
      {
        id: 'product-1',
        categoryId: '1',
        createdAt: new Date(),
        description: 'Descrição',
        isActive: true,
        name: 'produto teste 1',
        price: '15.50',
        updatedAt: new Date(),
        urlImage: 'imagem',
      },
      {
        id: 'product-2',
        name: 'produto teste 2',
        categoryId: '2',
        createdAt: new Date(),
        description: 'Descrição',
        isActive: true,
        price: '15.50',
        updatedAt: new Date(),
        urlImage: 'imagem',
      },
    );
  });

  it('should be able to get a list of products created', async () => {
    const products = await sut.execute({});

    expect(products).toHaveLength(2);
    expect(products).toEqual([
      expect.objectContaining({ id: 'product-1', name: 'produto teste 1' }),
      expect.objectContaining({
        id: 'product-2',
        name: 'produto teste 2',
      }),
    ]);
  });

  it('should be able to get a list of products created filtered by categoryId', async () => {
    const products = await sut.execute({ categoryId: '2' });

    expect(products).toHaveLength(1);
    expect(products).toEqual([
      expect.objectContaining({
        id: 'product-2',
        name: 'produto teste 2',
        categoryId: '2',
      }),
    ]);
  });
});
