import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import FindOneByIdUseCase from './find-one-by-id';
import { NotFoundException } from '@nestjs/common';

let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: FindOneByIdUseCase;

describe('Find all products', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new FindOneByIdUseCase(inMemoryProductsRepository);

    inMemoryProductsRepository.items.push({
      id: 'product-1',
      categoryId: '1',
      name: 'produto teste 1',
      description: 'Descrição',
      isActive: true,
      price: '15.50',
      urlImage: 'imagem',
      updatedAt: new Date(),
      createdAt: new Date(),
    });
  });

  it('should be able to get a product by ID', async () => {
    const products = await sut.execute('product-1');

    expect(products).toEqual(
      expect.objectContaining({ id: 'product-1', name: 'produto teste 1' }),
    );
  });

  it('should not be able to get a produt with a wrong ID', async () => {
    expect(async () => {
      await sut.execute('product-2');
    }).rejects.toBeInstanceOf(NotFoundException);
  });
});
