import { Client, Prisma } from '@prisma/client';
import { ClientsRepository } from '../repositories/clients-repository';

export class CreateClientUseCase {
  constructor(private readonly clientsRepository: ClientsRepository) {}

  async execute(data: Prisma.ClientCreateInput): Promise<Client> {
    const client = await this.clientsRepository.create(data);

    return client;
  }
}
