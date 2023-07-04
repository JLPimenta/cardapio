import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import FindAllProductsUseCase from '../use-cases/find-all';

export function makeFindAllProductsUseCase() {
  const prismaService = new PrismaService();
  const productRepository = new PrismaProductsRepository(prismaService);

  return new FindAllProductsUseCase(productRepository);
}
