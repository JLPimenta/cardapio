import { Product } from '@prisma/client';

export interface ProductRepository {
  create(product: Product): Promise<Product>;

  update(id: string, product: Product): Promise<Product>;

  changeAvailability(id: string): Promise<Product>;

  findlAll(): Promise<Product[]>;

  findOneById(id: string): Promise<Product | null>;
}
