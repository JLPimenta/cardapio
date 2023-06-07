import { Category, Prisma } from '@prisma/client';

export interface CategoriesRepository {
  changeAvailability(id: string): Promise<Category>;
  findAll(): Promise<Category[]>;
  findOneById(id: string): Promise<Category | null>;
  create(data: Prisma.CategoryCreateInput): Promise<Category>;
}
