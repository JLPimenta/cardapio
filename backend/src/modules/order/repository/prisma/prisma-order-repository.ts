import { Order, Prisma } from '@prisma/client';
import { FindAllOrdersParams, OrderRepository } from '../order-repository';
import { CreateOrderDto } from '../../dto/create-order-dto';
import { UpdateOrderDto } from '../../dto/update-order-dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    const { products, ...orderProps } = data;

    const order = await this.prisma.order.create({
      data: {
        ...orderProps,
      },
    });

    const productsOnOrder = await this.prisma.productsOnOrders.createMany({
      data: products.map((products) => ({
        orderId: order.id,
        productId: products.id,
        quantity: products.quantity,
        note: products.note,
      })),
    });

    return { order, productsOnOrder };
  }

  async delete(id: string): Promise<void> {
    await this.prisma.order.delete({ where: { id } });
  }

  async findAll({ tableAccountId, clientId }: FindAllOrdersParams) {
    const order = await this.prisma.order.findMany({
      where: {
        tableAccountId: tableAccountId ? tableAccountId : undefined,
        clientId: clientId ? clientId : undefined,
      },
      orderBy: { updatedAt: 'desc' },
      include: {
        Products: {
          select: {
            Product: { select: { name: true, price: true } },
            id: true,
            quantity: true,
          },
        },
      },
    });

    return order;
  }

  async findOneByClientId(clientId: string): Promise<Order | null> {
    const order = await this.prisma.order.findFirst({
      where: {
        clientId,
      },
    });

    return order;
  }

  async findOneById(id: string): Promise<Order | null> {
    const order = await this.prisma.order.findFirst({
      where: {
        id,
      },
    });

    return order;
  }

  async update(id: string, data: UpdateOrderDto) {
    const { products, ...orderProps } = data;

    const order = await this.prisma.order.update({
      where: { id },
      data: {
        updatedAt: new Date(),
        ...orderProps,
      },
    });

    if (products) {
      for (const product of products) {
        const productOnOrder = await this.prisma.productsOnOrders.findFirst({
          where: {
            orderId: id,
            productId: product.id,
          },
        });

        if (productOnOrder) {
          await this.prisma.productsOnOrders.update({
            where: {
              id: productOnOrder.id,
            },
            data: {
              quantity: product.quantity,
              note: product.note,
            },
          });
        } else {
          await this.prisma.productsOnOrders.create({
            data: {
              orderId: id,
              productId: product.id,
              quantity: product.quantity,
              note: product.note,
            },
          });
        }
      }
    }
    return order;
  }

  async changeStatus(
    id: string,
    data: Prisma.OrderUpdateInput,
  ): Promise<Order> {
    const order = await this.prisma.order.update({
      where: { id },
      data,
    });

    return order;
  }
}
