import { Controller, Get } from '@nestjs/common';
import makeGetIngredientsUseCase from './factories/makeGetIngredientsUseCase';

@Controller('ingredients')
export class IngredientController {
  @Get('')
  async findAll() {
    const getIngredients = makeGetIngredientsUseCase();

    const ingredients = await getIngredients.execute();

    return ingredients;
  }
}
