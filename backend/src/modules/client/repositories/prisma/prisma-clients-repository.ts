import { Client, Prisma } from '@prisma/client';
import { ClientsRepository } from '../clients-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PrismaClientsRepository implements ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByEmail(email: string) {
    const client = await this.prisma.client.findUnique({ where: { email } });

    return client;
  }

  async create(data: Prisma.ClientCreateInput) {
    const client = await this.prisma.client.create({ data });

    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = await this.prisma.client.findFirst({ where: { id } });

    return client;
  }
}
