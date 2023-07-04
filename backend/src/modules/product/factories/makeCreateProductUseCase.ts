import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { CreateProductUseCase } from '../use-cases/create-product';
import { PrismaCategoriesRepository } from '../../category/repositories/prisma/prisma-categories-repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export function makeCreateProductUseCase() {
  const prismaService = new PrismaService();
  const productRepository = new PrismaProductsRepository(prismaService);
  const categoryRepository = new PrismaCategoriesRepository(prismaService);

  return new CreateProductUseCase(productRepository, categoryRepository);
}
