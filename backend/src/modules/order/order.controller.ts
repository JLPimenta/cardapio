import { Body, Controller, Post } from '@nestjs/common';
import { Order } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order-dto';
import { makeCreateOrderUseCase } from './factories/makeCreateOrderUseCase';

@Controller('order')
export class OrderController {
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    const createOrderUseCase = makeCreateOrderUseCase();

    return createOrderUseCase.execute(createOrderDto);
  }
}
