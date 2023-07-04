import { Module } from '@nestjs/common';
import { TableAccountController } from './table-account.controller';
import { PrismaTableAccountRepository } from './repositories/prisma/prisma-table-account-repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TableAccountController],
  exports: [PrismaTableAccountRepository],
  providers: [PrismaTableAccountRepository],
  imports: [PrismaModule],
})
export class TableAccountModule {}
