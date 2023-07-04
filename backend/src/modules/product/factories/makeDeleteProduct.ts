import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import DeleteProductUseCase from '../use-cases/delete-product';

export function makeDeleteProductUseCase() {
  const prismaService = new PrismaService();
  const productRepository = new PrismaProductsRepository(prismaService);

  return new DeleteProductUseCase(productRepository);
}
