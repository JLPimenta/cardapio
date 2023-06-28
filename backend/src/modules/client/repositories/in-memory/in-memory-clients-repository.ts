import { Client, Prisma } from '@prisma/client';
import { ClientsRepository } from '../clients-repository';
import { randomUUID } from 'crypto';

export class InMemoryClientsRepository implements ClientsRepository {
  public items: Client[] = [];

  async create(data: Prisma.ClientCreateInput) {
    const client = {
      id: data.id ?? randomUUID(),
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(client);

    return client;
  }

  findById(id: string): Promise<Client> {
    return Promise.resolve(undefined);
  }
}
