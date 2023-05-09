import { Controller, Get, Param, Patch } from '@nestjs/common';

import { makeGetCategoriesUseCase } from './factories/makeGetCategoriesUseCase';
import { makeChangeAvailabilityUseCase } from './factories/makeChangeAvailabilityUseCase';

@Controller('categories')
export class CategoryController {
  @Get()
  async getCategories() {
    const getCategoriesUseCase = makeGetCategoriesUseCase();

    return getCategoriesUseCase.execute();
  }

  @Patch(':id')
  async changeAvailability(@Param('id') categodyId: string) {
    const changeAvailabilityUseCase = makeChangeAvailabilityUseCase();

    return changeAvailabilityUseCase.execute(categodyId);
  }
}
