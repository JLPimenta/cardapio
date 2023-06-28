import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaTableRepository } from './repositories/prisma/prisma-table-repository';

@Module({
  controllers: [TableController],
  imports: [PrismaModule],
  exports: [PrismaTableRepository],
  providers: [PrismaTableRepository],
})
export class TableModule {}
