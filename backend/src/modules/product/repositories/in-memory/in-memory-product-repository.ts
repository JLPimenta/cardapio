import { ProductRepository } from '../product-repository';
import { Product } from '@prisma/client';

export class InMemoryProductRepository implements ProductRepository {
  changeAvailability(id: string): Promise<Product> {
    return Promise.resolve(undefined); // TODO: implement
  }

  create(product: Product): Promise<Product> {
    return Promise.resolve(undefined); // TODO: implement
  }

  findOneById(id: string): Promise<Product | null> {
    return Promise.resolve(undefined); // TODO: implement
  }

  findlAll(): Promise<Product[]> {
    return Promise.resolve([]); // TODO: implement
  }

  update(id: string, product: Product): Promise<Product> {
    return Promise.resolve(undefined); // TODO: implement
  }
}
