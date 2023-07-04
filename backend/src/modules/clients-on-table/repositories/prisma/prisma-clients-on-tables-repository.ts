import { Prisma } from '@prisma/client';
import { ClientsOnTablesRepository } from '../clients-on-tables-repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export class PrismaClientsOnTablesRepository
  implements ClientsOnTablesRepository
{
  constructor(private readonly prisma: PrismaService) {}
  async findByClientEmail(email: string) {
    const client = await this.prisma.client.findUnique({
      where: { email },
    });

    if (client) {
      const clientOnTable = await this.prisma.clientsOnTables.findFirst({
        where: {
          clientId: client.id,
        },
      });

      return clientOnTable ? client : null;
    }

    return null;
  }

  async checkIn(data: Prisma.ClientsOnTablesUncheckedCreateInput) {
    const clientOnTable = await this.prisma.clientsOnTables.create({ data });

    return clientOnTable;
  }
}
