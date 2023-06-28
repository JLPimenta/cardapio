import { Module } from '@nestjs/common';
import { TableAccountController } from './table-account.controller';
import { PrismaTableAccountRepository } from './repositories/prisma/prisma-table-account-repository';

@Module({
  controllers: [TableAccountController],
  exports: [PrismaTableAccountRepository],
  providers: [PrismaTableAccountRepository],
})
export class TableAccountModule {}
