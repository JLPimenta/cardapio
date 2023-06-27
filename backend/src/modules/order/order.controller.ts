import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import {Order, Prisma} from '@prisma/client';
import { CreateOrderDto } from './dto/create-order-dto';
import { makeCreateOrderUseCase } from './factories/makeCreateOrderUseCase';
import { UpdateOrderDto } from './dto/update-order-dto';
import { makeUpdateOrderUseCase } from './factories/makeUpdateOrderUseCase';
import { makeChangeStatusUseCase } from './factories/makeChangeStatusUseCase';

@Controller('order')
export class OrderController {
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    const createOrderUseCase = makeCreateOrderUseCase();

    return createOrderUseCase.execute(createOrderDto);
  }

  @Patch(':id')
  async changeStatus(
    @Param('id') id: string,
    @Body() status: Prisma.EnumStatusOrderFieldUpdateOperationsInput,
  ): Promise<Order> {
    const changeStatusOrderUseCase = makeChangeStatusUseCase();

    return changeStatusOrderUseCase.execute(id, status);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateOrderDto) {
    const updateOrderUseCase = makeUpdateOrderUseCase();

    return updateOrderUseCase.execute(id, data);
  }
}
