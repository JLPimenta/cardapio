import {
  FindAllOrdersParams,
  OrderRepository,
} from '../repository/order-repository';

export class FindAllOrdersUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute({ tableAccountId, clientId }: FindAllOrdersParams) {
    const order = await this.orderRepository.findAll({
      tableAccountId,
      clientId,
    });

    return order;
  }
}
