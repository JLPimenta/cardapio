import { OrderRepository } from '../repository/order-repository';
import { Prisma } from '@prisma/client';
import { ClientsRepository } from '../../client/repositories/clients-repository';
import { ConflictException } from '@nestjs/common';
import { TablesAccountRepository } from '../../table-account/repositories/tables-account-repository';

export class CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly clientRepository: ClientsRepository,
    private readonly tableAccountRepository: TablesAccountRepository,
  ) {}

  async execute(data: Prisma.OrderUncheckedCreateInput) {
    const [clientExists, tableAccountExists] = await Promise.all([
      this.clientRepository.findById(data.clientId),
      this.tableAccountRepository.findOneById(data.tableAccountId),
    ]);

    if (!clientExists) {
      throw new ConflictException('Client not found.');
    }

    if (!tableAccountExists) {
      throw new ConflictException('Table account not found.');
    }

    return await this.orderRepository.create(data);
  }
}
