import { ProductRepository } from '../product-repository';
import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDto } from '../../dto/create-product-dto';

const prisma = new PrismaClient();

export class PrismaProductRepository implements ProductRepository {
  async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { name },
    });

    return product;
  }

  async changeAvailability(id: string): Promise<Product> {
    const { isActive } = await this.findOneById(id);

    const product: Product = await prisma.product.update({
      where: { id },
      data: { isActive: !isActive },
    });

    return product;
  }

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: product,
    });

    product.ingredients.map((ingredient) => ({
      ingredientId: ingredient,
    }));

    return newProduct;
  }

  async update(id: string, product: Product): Promise<Product> {
    return Promise.resolve(undefined);
  }

  async findOneById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    return product;
  }

  async findlAll(): Promise<Product[]> {
    return Promise.resolve([]);
  }
}
