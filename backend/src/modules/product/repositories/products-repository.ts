import { Prisma, Product } from '@prisma/client';

export interface FindAllProductsParams {
  categoryId?: string;
}

export interface ProductsRepository {
  create(product: Prisma.ProductUncheckedCreateInput): Promise<Product>;

  update(
    id: string,
    data: Prisma.ProductUncheckedUpdateInput,
  ): Promise<Product>;

  delete(id: string): Promise<void>;

  changeAvailability(id: string): Promise<Product>;

  findOneById(id: string): Promise<Product | null>;

  findByName(name: string): Promise<Product | null>;

  findAll(params?: FindAllProductsParams): Promise<Product[]>;

  save(product: Product): Promise<void>;
}
