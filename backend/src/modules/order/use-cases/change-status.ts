import { OrderRepository } from '../repository/order-repository';
import { Order, Prisma, StatusOrder } from '@prisma/client';
import { ConflictException } from '@nestjs/common';

export class ChangeStatusOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string, data: Prisma.OrderUpdateInput): Promise<Order> {
    const orderExist = await this.orderRepository.findOneById(id);

    if (!orderExist) {
      throw new ConflictException('Order not found');
    }

    return await this.orderRepository.changeStatus(id, data);
  }
}
