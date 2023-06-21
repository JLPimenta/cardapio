import { Prisma, Product } from '@prisma/client';
import { UpdateProductDTO } from '../dto/update-product-dto';

export interface ProductsRepository {
  create(product: Prisma.ProductUncheckedCreateInput): Promise<Product>;

  update(id: string, data: UpdateProductDTO): Promise<Product>;

  delete(id: string): Promise<void>;

  changeAvailability(id: string): Promise<Product>;

  findOneById(id: string): Promise<Product | null>;

  findByName(name: string): Promise<Product | null>;

  findAll(
    name: string,
    isActive: string,
    categoryId: string,
  ): Promise<Product[]>;
}
