import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaProductsRepository } from '../repositories/prisma/prisma-products-repository';
import FindOneByIdUseCase from '../use-cases/find-one-by-id';

export function makeFindOneByIdUseCase() {
  const prismaService = new PrismaService();
  const productRepository = new PrismaProductsRepository(prismaService);

  return new FindOneByIdUseCase(productRepository);
}
