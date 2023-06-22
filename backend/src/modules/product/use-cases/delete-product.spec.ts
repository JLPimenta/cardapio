import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import { beforeEach, describe, expect, it } from 'vitest';
import DeleteProductUseCase from './delete-product';
import { NotFoundException } from '@nestjs/common';

let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: DeleteProductUseCase;

describe('Delete a product', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new DeleteProductUseCase(inMemoryProductsRepository);

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

  it('should be able to delete a product', async () => {
    await sut.execute('product-1');

    expect(inMemoryProductsRepository.items).toHaveLength(0);
  });

  it('should not be able to delete a product with wrong an invalid ID', async () => {
    expect(async () => {
      await sut.execute('product-2');
    }).rejects.toBeInstanceOf(NotFoundException);
  });
});
