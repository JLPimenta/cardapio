import { ProductRepository } from '../product-repository';
import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDto } from '../../dto/create-product-dto';
import { IngredientsParams } from '../../dto/ingredients-params';

const prisma = new PrismaClient();

export class PrismaProductRepository implements ProductRepository {
  async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { name },
    });

    return product;
  }

  async findOneById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    return product;
  }

  async findAll(page: number, limit: number) {
    const products = await prisma.product.findMany({
      orderBy: { name: 'asc' },
      where: { isActive: true },
      skip: (page - 1) * limit,
      take: limit,
    });

    return products;
  }

  async searchProduct(
    name: string,
    isActive: string | undefined,
    page: number,
    limit: number,
  ) {
    const isActiveBool = isActive
      ? isActive.toLowerCase() === 'true'
      : undefined;

    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
        isActive: isActiveBool,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return product;
  }

  async create(product: CreateProductDto): Promise<Product> {
    const { ingredients, ...productProps } = product;

    const newProduct = await prisma.product.create({
      data: {
        ...productProps,
      },
    });

    if (newProduct && ingredients?.length) {
      await prisma.ingredientsOnProducts.createMany({
        data: ingredients.map((ingredient: IngredientsParams) => ({
          ingredientId: ingredient.ingredientId,
          productId: newProduct.id,
          quantity: ingredient.quantity,
        })),
      });
    }

    return newProduct;
  }

  async update(id: string, product: Product): Promise<Product> {
    return Promise.resolve(undefined);
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
