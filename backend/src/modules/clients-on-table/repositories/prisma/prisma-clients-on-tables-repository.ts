import { Prisma, PrismaClient } from '@prisma/client';
import { ClientsOnTablesRepository } from '../clients-on-tables-repository';

const prisma = new PrismaClient();

export class PrismaClientsOnTablesRepository
  implements ClientsOnTablesRepository
{
  async findByClientEmail(email: string) {
    const client = await prisma.client.findUnique({
      where: { email },
    });

    if (client) {
      const clientOnTable = await prisma.clientsOnTables.findFirst({
        where: { clientId: client.id },
      });

      if (clientOnTable) return null;
    }

    return client;
  }

  async checkIn(data: Prisma.ClientsOnTablesUncheckedCreateInput) {
    const clientOnTable = await prisma.clientsOnTables.create({ data });

    return clientOnTable;
  }
}
