import { Category, PrismaClient } from '@prisma/client';
import { CategoriesRepository } from '../categories-repository';

const prisma = new PrismaClient();

export class PrismaCategoriesRepository implements CategoriesRepository {
  async changeAvailability(id: string): Promise<Category> {
    const { isActive } = await this.findOneById(id);

    const category = await prisma.category.update({
      where: { id },
      data: { isActive: !!isActive },
    });

    return category;
  }

  async findlAll(): Promise<Category[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }

  async findOneById(id: string): Promise<Category> {
    const category = await prisma.category.findUnique({ where: { id } });

    return category;
  }
}
