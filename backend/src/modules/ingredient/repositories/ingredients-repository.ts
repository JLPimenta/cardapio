import { Ingredient } from '@prisma/client';

export default interface IngredientsRepository {
  findAll(): Promise<Ingredient[]>;
  findById(id: string): Promise<Ingredient | null>;
}
