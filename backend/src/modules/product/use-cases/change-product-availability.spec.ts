import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import { ChangeProductAvailabilityUseCase } from './change-product-availability';
import { NotFoundException } from '@nestjs/common';

let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: ChangeProductAvailabilityUseCase;

describe('Change product availability', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new ChangeProductAvailabilityUseCase(inMemoryProductsRepository);

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

  it('should be able to update the status of a product', async () => {
    await sut.execute('product-1');

    expect(inMemoryProductsRepository.items[0].isActive).toEqual(false);
  });

  it('should not be able to update the status of a product with an wrong ID', async () => {
    expect(async () => {
      await sut.execute('product-2');
    }).rejects.toBeInstanceOf(NotFoundException);
  });
});
