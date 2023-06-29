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
import { Order, Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order-dto';
import { makeCreateOrderUseCase } from './factories/makeCreateOrderUseCase';
import { UpdateOrderDto } from './dto/update-order-dto';
import { makeUpdateOrderUseCase } from './factories/makeUpdateOrderUseCase';
import { makeChangeStatusUseCase } from './factories/makeChangeStatusUseCase';
import { makeDeleteOrderUseCase } from './factories/makeDeleteOrderUseCase';
import { makeFindAllOrdersUseCase } from './factories/makeFindAllOrdersUseCase';
import { makeFindOneOrderByIdUseCase } from './factories/makeFindOneOrderByIdUseCase';

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

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteOrderUseCase = makeDeleteOrderUseCase();

    return deleteOrderUseCase.execute(id);
  }

  @Get()
  async findAll(
    @Query('tableAccountId') tableAccountId: string,
    @Query('clientId') clientId: string,
  ) {
    const filterOrdersUseCase = makeFindAllOrdersUseCase();

    return filterOrdersUseCase.execute({ tableAccountId, clientId });
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const findOneByIdUseCase = makeFindOneOrderByIdUseCase();

    return await findOneByIdUseCase.execute(id);
  }
}
