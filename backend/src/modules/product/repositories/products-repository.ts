import { Product } from '@prisma/client';
import { CreateProductDto } from '../dto/create-product-dto';
import { UpdateProductDTO } from '../dto/update-product-dto';
import { DeleteIngredientOnProductRequest } from '../use-cases/delete-ingredient-from-a-product';

export interface ingredientsOnProducts {
  name: string;
  quantity: number;
}

export interface ProductsRepository {
  create(product: CreateProductDto): Promise<Product>;

  update(id: string, data: UpdateProductDTO): Promise<Product>;

  delete(id: string): void;

  deleteIngredient(data: DeleteIngredientOnProductRequest): void;

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
