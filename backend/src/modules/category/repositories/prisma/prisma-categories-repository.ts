import { Category, PrismaClient } from '@prisma/client';
import { CategoriesRepository } from '../categories-repository';

const prisma = new PrismaClient();

export class PrismaCategoriesRepository implements CategoriesRepository {
  async changeAvailability(id: string): Promise<Category> {
    const { isActive } = await this.findOneById(id);

    return prisma.category.update({
      where: { id },
      data: { isActive: !isActive },
    });
  }

  async findlAll(): Promise<Category[]> {
    return prisma.category.findMany();
  }

  async findOneById(id: string): Promise<Category> {
    return prisma.category.findUnique({ where: { id } });
  }
}
