import { Module } from '@nestjs/common';
import { ClientsOnTableController } from './clients-on-table.controller';

@Module({
  controllers: [ClientsOnTableController],
})
export class ClientsOnTableModule {}
