import { Prisma, Product } from '@prisma/client';
import { UpdateProductDTO } from '../../dto/update-product-dto';
import { ProductsRepository } from '../products-repository';
import { randomUUID } from 'crypto';

export class InMemoryProductsRepository implements ProductsRepository {
  async create(data: Prisma.ProductUncheckedCreateInput): Promise<Product> {
    const product = {
      id: randomUUID(),
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
  update(id: string, data: UpdateProductDTO): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async changeAvailability(id: string): Promise<Product> {
    const product = await this.findOneById(id);

    product.isActive = !product.isActive;

    return product;
  }

  async findOneById(id: string): Promise<Product> {
    const product = this.items.find((item) => item.id === id);

    if (!product) {
      return null;
    }

    return product;
  }

  async findByName(name: string): Promise<Product> {
    const product = this.items.find((item) => item.name === name);

    if (!product) {
      return null;
    }

    return product;
  }
  findAll(
    name: string,
    isActive: string,
    categoryId: string,
  ): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  public items: Product[] = [];
}
