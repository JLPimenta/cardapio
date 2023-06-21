import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository';
import { beforeEach, describe, expect, it } from 'vitest';
import { ChangeProductAvailabilityUseCase } from './change-product-availability';

let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: ChangeProductAvailabilityUseCase;

describe('Change product availability', () => {
  beforeEach(async () => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new ChangeProductAvailabilityUseCase(inMemoryProductsRepository);
  });
  it('should be able to have a list of products created', async () => {
    const product = await inMemoryProductsRepository.create({
      createdAt: new Date(),
      description: 'Descrição',
      name: 'produto teste',
      price: '15.50',
      updatedAt: new Date(),
      urlImage: 'imagem',
    });

    sut.execute(product.id);

    console.log(product.isActive);
    console.log(!product.isActive);

    expect(inMemoryProductsRepository.items[0].isActive).toBe(
      !product.isActive,
    );
  });
});
