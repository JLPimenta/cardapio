import { Client, ClientsOnTables, Prisma } from '@prisma/client';

export interface ClientsOnTablesRepository {
  checkIn(
    data: Prisma.ClientsOnTablesUncheckedCreateInput,
  ): Promise<ClientsOnTables>;

  findByClientEmail(email: string): Promise<Client | null>;
}
