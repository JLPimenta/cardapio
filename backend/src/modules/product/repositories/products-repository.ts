import { Product } from '@prisma/client';
import { CreateProductDto } from '../dto/create-product-dto';

export interface ingredientsOnProducts {
  name: string;
  quantity: number;
}

export interface ProductsRepository {
  create(product: CreateProductDto): Promise<Product>;

  update(id: string, product: Product): Promise<Product>;

  changeAvailability(id: string): Promise<Product>;

  findOneById(id: string): Promise<Product | null>;

  findByName(name: string): Promise<Product | null>;

  findAllIngredients(
    productId: string,
  ): Promise<ingredientsOnProducts[] | null>;

  findAll(
    name: string,
    isActive: string,
    categoryId: string,
  ): Promise<Product[]>;
}
