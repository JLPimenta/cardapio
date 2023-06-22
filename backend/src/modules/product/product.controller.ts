import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product-dto';
import { makeCreateProductUseCase } from './factories/makeCreateProductUseCase';
import { Product } from '@prisma/client';

import { makeFindAllProductsUseCase } from './factories/makeFindAllProductsUseCase';
import { makeChangeProductAvailabilityUseCase } from './factories/makeChangeProductAvailabilityUseCase';
import { makeFindOneByIdUseCase } from './factories/makeFindOneByIdUseCase';
import { makeUpdateProductUseCase } from './factories/makeUpdateProductUseCase';
import { UpdateProductDTO } from './dto/update-product-dto';
import { makeDeleteProductUseCase } from './factories/makeDeleteProduct';

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

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    const updateProductUseCase = makeUpdateProductUseCase();

    return updateProductUseCase.execute(id, data);
  }

  @Get()
  async findAll(@Query('categoryId') categoryId: string) {
    const filterProductsUseCase = makeFindAllProductsUseCase();

    return filterProductsUseCase.execute({ categoryId });
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const findOneByIdUseCase = makeFindOneByIdUseCase();

    return await findOneByIdUseCase.execute(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteProductUseCase = makeDeleteProductUseCase();

    return await deleteProductUseCase.execute(id);
  }
}
