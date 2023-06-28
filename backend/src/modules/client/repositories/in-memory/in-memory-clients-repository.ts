import { Client, Prisma } from '@prisma/client';
import { ClientsRepository } from '../clients-repository';
import { randomUUID } from 'crypto';

export class InMemoryClientsRepository implements ClientsRepository {
  public items: Client[] = [];

  async findByEmail(email: string) {
    const client = this.items.find((item) => item.email === email);

    return client;
  }

  async create(data: Prisma.ClientCreateInput) {
    const client = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(client);

    return client;
  }
}
