import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product-dto';
import { makeCreateProductUseCase } from './factory/makeCreateProductUseCase';
import { Product } from '@prisma/client';
import { FilterProductDto } from './dto/filter-product-dto';
import { makeFilterProductUseCase } from './factory/makeFilterProductUseCase';
import { makeChangeProductAvailabilityUseCase } from './factory/makeChangeProductAvailabilityUseCase';
import { makeFindOneByIdUseCase } from './factory/makeFindOneByIdUseCase';
import { makeFindAllProductsUseCase } from './factory/makeFindAllProductsUseCase';

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

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Product> {
    const findOneByIdUseCase = makeFindOneByIdUseCase();

    return findOneByIdUseCase.execute(id);
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ): Promise<Product[]> {
    const findAllProductsUseCase = makeFindAllProductsUseCase();

    return findAllProductsUseCase.execute(page, limit);
  }

  @Get('search')
  async searchProduct(
    @Query('name') name?: string,
    @Query('isActive') isActive?: string,
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const filterProductsUseCase = makeFilterProductUseCase();
    const filter: FilterProductDto = {
      name,
      isActive,
    };

    return filterProductsUseCase.execute(filter, page, limit);
  }
}
