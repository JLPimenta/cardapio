import { Controller, Get, Param, Patch } from '@nestjs/common';

import { makeGetCategoriesUseCase } from './factories/makeGetCategoriesUseCase';
import { makeChangeAvailabilityUseCase } from './factories/makeChangeAvailabilityUseCase';
import { makeFindOneByIdUseCase } from './factories/makeFindOneById';

@Controller('categories')
export class CategoryController {
  @Get()
  async getCategories() {
    const getCategoriesUseCase = makeGetCategoriesUseCase();

    return getCategoriesUseCase.execute();
  }

  @Get(':id')
  async findOneById(@Param('id') categodyId: string) {
    const findOneByIdUseCase = makeFindOneByIdUseCase();

    return findOneByIdUseCase.execute(categodyId);
  }

  @Patch(':id')
  async changeAvailability(@Param('id') categodyId: string) {
    const changeAvailabilityUseCase = makeChangeAvailabilityUseCase();

    return changeAvailabilityUseCase.execute(categodyId);
  }
}
