import { Client, Prisma, PrismaClient } from '@prisma/client';
import { ClientsRepository } from '../clients-repository';

const prisma = new PrismaClient();

export class PrismaClientsRepository implements ClientsRepository {
  async create(data: Prisma.ClientCreateInput) {
    const client = await prisma.client.create({ data });

    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = await prisma.client.findFirst({ where: { id } });

    return client;
  }
}
