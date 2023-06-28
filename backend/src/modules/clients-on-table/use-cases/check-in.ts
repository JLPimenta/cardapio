import { Client, Table, TableAccount } from '@prisma/client';
import { ClientsOnTablesRepository } from '../repositories/clients-on-tables-repository';
import { TablesRepository } from 'src/modules/table/repositories/tables-repository';
import { TablesAccountRepository } from 'src/modules/table-account/repositories/tables-account-repository';
import { ClientsRepository } from 'src/modules/client/repositories/clients-repository';
import { ConflictException, NotFoundException } from '@nestjs/common';

export interface CheckInClientsOnTableUseCaseResponse {
  client: Client;
  table: Table;
  tableAccount: TableAccount;
}

export interface CheckInClientsOnTableUseCaseRequest {
  tableId: string;
  clientName: string;
  clientEmail: string;
}

export class CheckInClientsOnTableUseCase {
  constructor(
    private readonly clientsOnTablesRepository: ClientsOnTablesRepository,
    private readonly clientsRepository: ClientsRepository,
    private readonly tablesRepository: TablesRepository,
    private readonly tablesAccountRepository: TablesAccountRepository,
  ) {}

  async execute({
    clientEmail,
    clientName,
    tableId,
  }: CheckInClientsOnTableUseCaseRequest): Promise<CheckInClientsOnTableUseCaseResponse> {
    const emailExists = await this.clientsRepository.findByEmail(clientEmail);

    if (emailExists) {
      throw new ConflictException('Client with this e-mail already exists');
    }

    const clientInTable =
      await this.clientsOnTablesRepository.findByClientEmail(clientEmail);

    if (clientInTable) {
      throw new ConflictException('Client already in another table');
    }

    const table = await this.tablesRepository.findOneById(tableId);

    if (!table) {
      throw new NotFoundException('Table not found');
    }

    const client = await this.clientsRepository.create({
      email: clientEmail,
      name: clientName,
    });

    const tableAccount = await this.tablesAccountRepository.existByTableId(
      tableId,
    );

    if (tableAccount) {
      await this.clientsOnTablesRepository.checkIn({
        clientId: client.id,
        tableAccountId: tableAccount.id,
      });
    } else {
      const tableAccount = await this.tablesAccountRepository.create({
        tableId,
        title: `${table.number} - ${new Date().toLocaleDateString()}`,
        totalTableAccount: '0,00',
      });

      await this.clientsOnTablesRepository.checkIn({
        clientId: client.id,
        tableAccountId: tableAccount.id,
      });
    }

    return { table, tableAccount, client };
  }
}
