import { Order, Prisma, PrismaClient } from '@prisma/client';
import { OrderRepository } from '../order-repository';
import { CreateOrderDto } from '../../dto/create-order-dto';

const prisma = new PrismaClient();

export class PrismaOrderRepository implements OrderRepository {
  async create(data: CreateOrderDto): Promise<Order> {
    const { products, ...orderProps } = data;

    const order = await prisma.order.create({
      data: {
        ...orderProps,
      },
    });

    await prisma.productsOnOrders.createMany({
      data: products.map((products) => ({
        orderId: order.id,
        productId: products.id,
        quantity: products.quantity,
        note: products.note,
      })),
    });

    return order;
  }

  async delete(id: string): Promise<void> {
    await prisma.order.delete({ where: { id } });
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
