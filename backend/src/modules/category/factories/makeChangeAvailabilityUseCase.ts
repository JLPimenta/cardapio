import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaCategoriesRepository } from '../repositories/prisma/prisma-categories-repository';
import { ChangeAvailabilityUseCase } from '../use-cases/changeAvailability';

export function makeChangeAvailabilityUseCase() {
  const prismaService = new PrismaService();
  const categoriesRepository = new PrismaCategoriesRepository(prismaService);
  return new ChangeAvailabilityUseCase(categoriesRepository);
}
