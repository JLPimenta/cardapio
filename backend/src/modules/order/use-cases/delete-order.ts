import { OrderRepository } from '../repository/order-repository';
import { ConflictException } from '@nestjs/common';

export class DeleteOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string) {
    const orderExist = await this.orderRepository.findOneById(id);

    if (!orderExist) {
      throw new ConflictException('Order not found');
    }

    await this.orderRepository.delete(id);
  }
}
