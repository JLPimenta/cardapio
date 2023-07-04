import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [OrderController],
  imports: [PrismaModule],
})
export class OrderModule {}
