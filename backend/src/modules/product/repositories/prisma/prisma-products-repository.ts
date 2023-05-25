import { ProductsRepository } from '../products-repository';
import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDto } from '../../dto/create-product-dto';
import { UpdateProductDTO } from '../../dto/update-product-dto';

const prisma = new PrismaClient();

export class PrismaProductsRepository implements ProductsRepository {
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

  async findAll(
    name: string,
    isActive: string | undefined,
    categoryId: string,
  ) {
    const isActiveBool = isActive
      ? isActive.toLowerCase() === 'true'
      : undefined;

    const product = await prisma.product.findMany({
      where: {
        name: name ? { contains: name } : undefined,
        categoryId: categoryId ? categoryId : undefined,
        isActive: isActiveBool,
      },
      orderBy: { name: 'asc' },
    });

    return product;
  }

  async create(data: CreateProductDto): Promise<Product> {
    const newProduct = await prisma.product.create({
      data,
    });

    return newProduct;
  }

  async update(id: string, data: UpdateProductDTO): Promise<Product> {
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
