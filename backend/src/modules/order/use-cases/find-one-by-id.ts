import { OrderRepository } from '../repository/order-repository';

export class FindOneByIdUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string) {
    const order = await this.orderRepository.findOneById(id);

    return order;
  }
}
