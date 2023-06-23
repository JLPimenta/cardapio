import { Client, Prisma } from '@prisma/client';

export interface ClientsRepository {
  create(data: Prisma.ClientCreateInput): Promise<Client>;
}
