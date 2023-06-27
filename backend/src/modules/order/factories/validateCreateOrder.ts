import { ConflictException } from '@nestjs/common';
import { ProductsParams } from '../dto/ProductsParams';
import { Client, TableAccount } from '@prisma/client';
import { PrismaProductsRepository } from '../../product/repositories/prisma/prisma-products-repository';

export async function validateCreateOrder(
  clientExists: Client,
  tableAccountExists: TableAccount,
  products: ProductsParams[],
): Promise<void> {
  const productsRepository = new PrismaProductsRepository();

  if (!clientExists) {
    throw new ConflictException('Client not found.');
  }

  if (!tableAccountExists) {
    throw new ConflictException('Table account not found.');
  }

  if (products) {
    const productsExists = await productsRepository.findManyByIds(
      products.map((product) => product.id),
    );

    if (productsExists.length == 0) {
      throw new ConflictException('Product not found.');
    }
  }
}
