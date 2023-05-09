import { Category } from '@prisma/client';
import { CategoriesRepository } from '../categories-repository';

export default class InMemoryCategoriesRepository
  implements CategoriesRepository
{
  private items: Category[] = [
    {
      id: '1',
      name: 'Lanches',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Bebidas Alcoolicas',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async changeAvailability(id: string): Promise<Category> {
    const category = await this.findOneById(id);

    category.isActive = !category.isActive;

    return category;
  }

  async findlAll(): Promise<Category[]> {
    return this.items;
  }

  async findOneById(id: string): Promise<Category> {
    const category = this.items.find((item) => item.id === id);

    if (!category) {
      return null;
    }

    return category;
  }
}
