import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ServiceUnavailableException,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product-dto';
import { makeCreateProductUseCase } from './factories/makeCreateProductUseCase';
import { Prisma, PrismaClient, Product } from '@prisma/client';

import { makeFindAllProductsUseCase } from './factories/makeFindAllProductsUseCase';
import { makeChangeProductAvailabilityUseCase } from './factories/makeChangeProductAvailabilityUseCase';
import { makeFindOneByIdUseCase } from './factories/makeFindOneByIdUseCase';
import { makeFindAllIngredientsUseCase } from './factories/makeFindAllIngredientsUseCase';
import { ingredientsOnProducts } from './repositories/products-repository';

const prisma = new PrismaClient();

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
  async findOneById(@Param('id') id: string) {
    const findOneByIdUseCase = makeFindOneByIdUseCase();

    return await findOneByIdUseCase.execute(id);
  }

  @Get('ingredients/:productId')
  async findAllIngredients(@Param('productId') id: string) {
    const findAllIngredientsUseCase = makeFindAllIngredientsUseCase();

    return await findAllIngredientsUseCase.execute(id);
  }
}
