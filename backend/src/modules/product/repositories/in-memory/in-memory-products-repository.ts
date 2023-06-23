import { Prisma, Product } from '@prisma/client';
import {
  FindAllProductsParams,
  ProductsRepository,
} from '../products-repository';
import { randomUUID } from 'crypto';
import { UpdateProductDTO } from '../../dto/update-product-dto';

export class InMemoryProductsRepository implements ProductsRepository {
  public items: Product[] = [];

  async save(product: Product): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === product.id);

    this.items[itemIndex] = product;
  }

  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = {
      id: data.id ?? randomUUID(),
      name: data.name,
      categoryId: data.categoryId ?? randomUUID(),
      description: data.description,
      isActive: data.isActive ?? true,
      price: data.price,
      urlImage: data.urlImage,
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    this.items.push(product);

    return product;
  }

  async update(id: string, data: UpdateProductDTO) {
    const product = await this.findOneById(id);

    data.name ? (product.name = data.name) : undefined;
    data.price ? (product.price = data.price) : undefined;
    data.isActive ? (product.isActive = data.isActive) : undefined;
    data.description ? (product.description = data.description) : undefined;
    data.categoryId ? (product.categoryId = data.categoryId) : undefined;
    data.urlImage ? (product.urlImage = data.urlImage) : undefined;

    return product;
  }

  async delete(id: string) {
    const product = this.items.findIndex((item) => item.id === id);

    this.items.splice(product, 1);
  }

  async changeAvailability(id: string) {
    const product = await this.findOneById(id);

    product.isActive = !product.isActive;

    return product;
  }

  async findOneById(id: string) {
    const product = this.items.find((item) => item.id === id);

    if (!product) {
      return null;
    }

    return product;
  }

  async findByName(name: string) {
    const product = this.items.find((item) => item.name === name);

    if (!product) {
      return null;
    }

    return product;
  }

  async findAll({ categoryId }: FindAllProductsParams) {
    const products = this.items.sort();

    if (categoryId) {
      return this.items.filter((item) => item.categoryId === categoryId);
    }

    return products;
  }
}
