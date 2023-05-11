import { PrismaClient } from '@prisma/client';
import IngredientsRepository from '../ingredients-repository';

const prisma = new PrismaClient();

export class PrismaIngredientsRepository implements IngredientsRepository {
  async findById(id: string) {
    const ingredient = await prisma.ingredient.findUnique({ where: { id } });

    return ingredient;
  }

  async findAll() {
    const ingredients = await prisma.ingredient.findMany({
      orderBy: { name: 'asc' },
    });

    return ingredients;
  }
}
