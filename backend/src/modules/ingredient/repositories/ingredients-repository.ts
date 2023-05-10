import { Ingredient } from '@prisma/client';

export default interface IngredientsRepository {
  findAll(): Promise<Ingredient[]>;
}
