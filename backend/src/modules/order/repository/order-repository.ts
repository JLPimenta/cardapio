import { Order, Prisma } from '@prisma/client';

export interface OrderRepository {
  create(data: Prisma.OrderUncheckedCreateInput): Promise<Order>;

  update(id: string, data: Prisma.OrderUncheckedUpdateInput): Promise<Order>;

  delete(id: string): Promise<void>;

  findOneById(id: string): Promise<Order | null>;

  findOneByClientId(clientId: string): Promise<Order | null>;

  findAll(): Promise<Order[]>;
}
