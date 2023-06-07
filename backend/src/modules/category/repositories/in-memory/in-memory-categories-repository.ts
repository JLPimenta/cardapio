import { Category, Prisma } from '@prisma/client';
import { CategoriesRepository } from '../categories-repository';
import { randomUUID } from 'crypto';

export default class InMemoryCategoriesRepository
  implements CategoriesRepository
{
  private items: Category[] = [];

  async create(data: Prisma.CategoryCreateInput) {
    const category = {
      id: randomUUID(),
      name: data.name,
      icon: data.icon,
      isActive: data.isActive,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(category);

    return category;
  }

  async changeAvailability(id: string): Promise<Category> {
    const category = await this.findOneById(id);

    category.isActive = !category.isActive;

    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.items.sort();
  }

  async findOneById(id: string): Promise<Category> {
    const category = this.items.find((item) => item.id === id);

    if (!category) {
      return null;
    }

    return category;
  }
}
