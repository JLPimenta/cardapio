import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product-dto';
import { makeCreateProductUseCase } from './factory/makeCreateProductUseCase';
import { Product } from '@prisma/client';
import { FilterProductDto } from './dto/filter-product-dto';
import { makeFindAllProductsUseCase } from './factory/makeFindAllProductsUseCase';
import { makeChangeProductAvailabilityUseCase } from './factory/makeChangeProductAvailabilityUseCase';
import { makeFindOneByIdUseCase } from './factory/makeFindOneByIdUseCase';

@Controller('products')
export class ProductController {
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    const createProductUseCase = makeCreateProductUseCase();

    return createProductUseCase.execute(createProductDto);
  }

  @Patch(':id')
  async changeAvailability(@Param('id') id: string): Promise<Product> {
    const changeProductAvailabilityUseCase =
      makeChangeProductAvailabilityUseCase();

    return changeProductAvailabilityUseCase.execute(id);
  }

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('isActive') isActive: string,
    @Query('categoryId') categoryId: string,
  ) {
    const filterProductsUseCase = makeFindAllProductsUseCase();

    return filterProductsUseCase.execute({ isActive, name, categoryId });
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Product> {
    const findOneByIdUseCase = makeFindOneByIdUseCase();

    return findOneByIdUseCase.execute(id);
  }
}
