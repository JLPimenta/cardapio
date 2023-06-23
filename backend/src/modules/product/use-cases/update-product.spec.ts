import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import { NotFoundException } from '@nestjs/common';
import { UpdateProductUseCase } from './update-product';
import InMemoryCategoriesRepository from 'src/modules/category/repositories/in-memory/in-memory-categories-repository';

let inMemoryProductsRepository: InMemoryProductsRepository;
let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let sut: UpdateProductUseCase;

describe('Change product availability', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    sut = new UpdateProductUseCase(
      inMemoryProductsRepository,
      inMemoryCategoriesRepository,
    );

    await inMemoryProductsRepository.create({
      id: 'product-1',
      createdAt: new Date(),
      description: 'Descrição',
      name: 'produto teste',
      price: '15.50',
      updatedAt: new Date(),
      urlImage: 'imagem',
      isActive: true,
    });
  });

  it('should be able to update a product', async () => {
    await sut.execute('product-1', { name: 'Produto atualizado' });

    expect(inMemoryProductsRepository.items[0].name).toEqual(
      'Produto atualizado',
    );
  });

  it('should not be able to update a product that not exists', async () => {
    expect(async () => {
      await sut.execute('product-2', { name: 'Produto atualizado' });
    }).rejects.toBeInstanceOf(NotFoundException);
  });
});
