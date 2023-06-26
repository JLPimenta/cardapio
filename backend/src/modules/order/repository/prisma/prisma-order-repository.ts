import { Order, Prisma, PrismaClient } from '@prisma/client';
import { OrderRepository } from '../order-repository';

const prisma = new PrismaClient();

export class PrismaOrderRepository implements OrderRepository {
  async create(data: Prisma.OrderUncheckedCreateInput): Promise<Order> {
    const order = await prisma.order.create({ data });

    return order;
  }

  async delete(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  async findAll(): Promise<Order[]> {
    const orders = await prisma.order.findMany();

    return orders;
  }

  async findOneByClientId(clientId: string): Promise<Order | null> {
    const order = await prisma.order.findFirst({
      where: {
        clientId,
      },
    });

    return order;
  }

  async findOneById(id: string): Promise<Order | null> {
    const order = await prisma.order.findFirst({
      where: {
        id,
      },
    });

    return order;
  }

  async update(
    id: string,
    data: Prisma.OrderUncheckedUpdateInput,
  ): Promise<Order> {
    const order = await prisma.order.update({ where: { id }, data });

    return order;
  }
}
