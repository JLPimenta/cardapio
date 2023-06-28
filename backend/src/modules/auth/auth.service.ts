import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Client, PrismaClient } from '@prisma/client';
import { PrismaTableRepository } from '../table/repositories/prisma/prisma-table-repository';
import { PrismaTableAccountRepository } from '../table-account/repositories/prisma/prisma-table-account-repository';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(
    private readonly tablesRepository: PrismaTableRepository,
    private readonly tablesAccountRepository: PrismaTableAccountRepository,
    private readonly jwtService: JwtService,
  ) {}
  async validateTable(tableId: string) {
    const table = await this.tablesRepository.findOneById(tableId);

    if (!table) return null;

    return table;
  }

  async login(client: Client, tableId: string) {
    const payload = { sub: client.email, tableId };

    const tableAccount = await this.tablesAccountRepository.existByTableId(
      tableId,
    );

    if (!tableAccount) {
      const tableAccount = await this.tablesAccountRepository.create({
        tableId,
        title: new Date().toLocaleDateString(),
        totalTableAccount: '0',
      });

      await prisma.clientsOnTables.create({
        data: { clientId: client.id, tableAccountId: tableAccount.id },
      });
    } else {
      await prisma.clientsOnTables.create({
        data: { clientId: client.id, tableAccountId: tableAccount.id },
      });
    }

    const token = this.jwtService.sign(payload);

    return { token, client, tableAccount };
  }
}
