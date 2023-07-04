import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaCategoriesRepository } from '../repositories/prisma/prisma-categories-repository';
import { FindOneByIdUseCase } from '../use-cases/findOneById';

export function makeFindOneByIdUseCase() {
  const prismaService = new PrismaService();
  const categoriesRepository = new PrismaCategoriesRepository(prismaService);
  return new FindOneByIdUseCase(categoriesRepository);
}
