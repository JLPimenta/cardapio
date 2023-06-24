import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TableController],
  imports: [PrismaModule],
})
export class TableModule {}
