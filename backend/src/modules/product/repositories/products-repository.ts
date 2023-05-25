import { Product } from '@prisma/client';
import { CreateProductDto } from '../dto/create-product-dto';
import { UpdateProductDTO } from '../dto/update-product-dto';

export interface ProductsRepository {
  create(product: CreateProductDto): Promise<Product>;

  update(id: string, data: UpdateProductDTO): Promise<Product>;

  delete(id: string): void;

  changeAvailability(id: string): Promise<Product>;

  findOneById(id: string): Promise<Product | null>;

  findByName(name: string): Promise<Product | null>;

  findAll(
    name: string,
    isActive: string,
    categoryId: string,
  ): Promise<Product[]>;
}
