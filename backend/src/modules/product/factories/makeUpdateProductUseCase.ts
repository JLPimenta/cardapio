import { PrismaCategoriesRepository } from 'src/modules/category/repositories/prisma/prisma-categories-repository';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import { UpdateProductUseCase } from '../use-cases/update-product';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export function makeUpdateProductUseCase() {
  const prismaService = new PrismaService();
  const productRepository = new PrismaProductsRepository(prismaService);
  const categoriesRepository = new PrismaCategoriesRepository(prismaService);

  const updateProductUseCase = new UpdateProductUseCase(
    productRepository,
    categoriesRepository,
  );

  return updateProductUseCase;
}
