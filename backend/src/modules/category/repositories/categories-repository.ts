import { Category } from '@prisma/client';

export interface CategoriesRepository {
  changeAvailability(id: string): Promise<Category>;
  findlAll(): Promise<Category[]>;
  findOneById(id: string): Promise<Category | null>;
}
