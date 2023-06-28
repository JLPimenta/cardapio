import { OrderRepository } from '../repository/order-repository';
import { Order } from '@prisma/client';
import { ClientsRepository } from '../../client/repositories/clients-repository';
import { TablesAccountRepository } from '../../table-account/repositories/tables-account-repository';
import { CreateOrderDto } from '../dto/create-order-dto';
import { validateCreateOrder } from '../factories/validateCreateOrder';

export class CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly clientRepository: ClientsRepository,
    private readonly tableAccountRepository: TablesAccountRepository,
  ) {}

  async execute(data: CreateOrderDto): Promise<Order> {
    const { clientId, tableAccountId, products } = data;

    const [clientExists, tableAccountExists] = await Promise.all([
      this.clientRepository.findById(clientId),
      this.tableAccountRepository.findOneById(tableAccountId),
    ]);

    await validateCreateOrder(clientExists, tableAccountExists, products);

    return await this.orderRepository.create(data);
  }
}
