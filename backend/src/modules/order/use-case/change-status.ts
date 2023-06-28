import { OrderRepository } from '../repository/order-repository';
import { Order, Prisma } from '@prisma/client';
import { ConflictException } from '@nestjs/common';

export class ChangeStatusOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(
    id: string,
    status: Prisma.EnumStatusOrderFieldUpdateOperationsInput,
  ): Promise<Order> {
    const orderExist = await this.orderRepository.findOneById(id);

    if (!orderExist) {
      throw new ConflictException('Order not found');
    }

    return await this.orderRepository.changeStatus(id, status);
  }
}
