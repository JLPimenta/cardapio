import { ProductRepository } from '../product-repository';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaProductRepository implements ProductRepository {
  async changeAvailability(id: string): Promise<Product> {
    const { isActive } = await this.findOneById(id);

    const product: Product = await prisma.product.update({
      where: { id },
      data: { isActive: !isActive },
    });

    return product;
  }

  async create(product: Product): Promise<Product> {
    const newProduct = await prisma.product.create({ data: product });

    return newProduct;
  }

  async update(id: string, product: Product): Promise<Product> {
    return Promise.resolve(undefined);
  }

  async findOneById(id: string): Promise<Product | null> {
    return Promise.resolve(undefined);
  }

  async findlAll(): Promise<Product[]> {
    return Promise.resolve([]);
  }
}
