import { Module } from '@nestjs/common';
import { ClientsOnTableController } from './clients-on-table.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ClientsOnTableController],
  imports: [PrismaModule],
})
export class ClientsOnTableModule {}
