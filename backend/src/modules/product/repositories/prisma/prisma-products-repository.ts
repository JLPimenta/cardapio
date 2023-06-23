import {
  FindAllProductsParams,
  ProductsRepository,
} from '../products-repository';
import { Prisma, PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaProductsRepository implements ProductsRepository {
  async save(data: Product) {
    await prisma.product.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }

  async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { name },
    });

    return product;
  }

  async findOneById(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        Category: { select: { name: true } },
      },
    });

    return product;
  }

  async findAll({ categoryId }: FindAllProductsParams) {
    const product = await prisma.product.findMany({
      where: {
        categoryId: categoryId ? categoryId : undefined,
      },
      orderBy: { name: 'asc' },
    });

    return product;
  }

  async create(data: Prisma.ProductUncheckedCreateInput): Promise<Product> {
    const newProduct = await prisma.product.create({
      data,
    });

    return newProduct;
  }

  async update(
    id: string,
    data: Prisma.ProductUncheckedUpdateInput,
  ): Promise<Product> {
    const productUpdated = await prisma.product.update({ where: { id }, data });

    return productUpdated;
  }

  async changeAvailability(id: string): Promise<Product> {
    const { isActive } = await this.findOneById(id);

    const product: Product = await prisma.product.update({
      where: { id },
      data: { isActive: !isActive },
    });

    return product;
  }
}
