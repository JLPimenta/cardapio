import { OrderRepository } from '../repository/order-repository';
import { ClientsRepository } from '../../client/repositories/clients-repository';
import { TablesAccountRepository } from '../../table-account/repositories/tables-account-repository';
import { Order } from '@prisma/client';
import { validateCreateOrder } from '../factories/validateCreateOrder';
import { UpdateOrderDto } from '../dto/update-order-dto';
import { ConflictException } from '@nestjs/common';

export class UpdateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly clientRepository: ClientsRepository,
    private readonly tableAccountRepository: TablesAccountRepository,
  ) {}

  async execute(id: string, data: UpdateOrderDto): Promise<Order> {
    const { clientId, tableAccountId, products } = data;

    const [clientExists, tableAccountExists, orderExist] = await Promise.all([
      this.clientRepository.findById(clientId),
      this.tableAccountRepository.findOneById(tableAccountId),
      this.orderRepository.findOneById(id),
    ]);

    if (!orderExist) {
      throw new ConflictException('Order not found');
    }

    await validateCreateOrder(clientExists, tableAccountExists, products);

    return await this.orderRepository.update(id, data);
  }
}
