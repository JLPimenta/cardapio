import { Controller, Get } from '@nestjs/common';

import { makeGetCategoriesUseCase } from './factories/makeGetCategoriesUseCase';

@Controller('categories')
export class CategoryController {
  @Get()
  async getCategories() {
    const getCategoriesUseCase = makeGetCategoriesUseCase();

    return getCategoriesUseCase.execute();
  }
}
