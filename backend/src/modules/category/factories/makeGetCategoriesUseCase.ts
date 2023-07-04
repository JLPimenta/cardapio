import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaCategoriesRepository } from '../repositories/prisma/prisma-categories-repository';
import { GetCategoriesUseCase } from '../use-cases/getCategories';

export function makeGetCategoriesUseCase() {
  const prismaService = new PrismaService();
  const categoriesRepository = new PrismaCategoriesRepository(prismaService);
  return new GetCategoriesUseCase(categoriesRepository);
}
