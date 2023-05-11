import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product-dto';
import { makeCreateProductUseCase } from './factory/makeCreateProductUseCase';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    const createProductUseCase = makeCreateProductUseCase();

    return createProductUseCase.execute(createProductDto);
  }
}
