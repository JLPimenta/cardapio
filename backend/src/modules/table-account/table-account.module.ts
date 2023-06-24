import { Module } from '@nestjs/common';
import { TableAccountController } from './table-account.controller';

@Module({
  controllers: [TableAccountController],
})
export class TableAccountModule {}
