import { Client, Prisma, PrismaClient } from '@prisma/client';
import { ClientsRepository } from '../clients-repository';
import { Injectable } from '@nestjs/common';

const prisma = new PrismaClient();

@Injectable()
export class PrismaClientsRepository implements ClientsRepository {
  async findByEmail(email: string) {
    const client = await prisma.client.findUnique({ where: { email } });

    return client;
  }

  async create(data: Prisma.ClientCreateInput) {
    const client = await prisma.client.create({ data });

    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = await prisma.client.findFirst({ where: { id } });

    return client;
  }
}
