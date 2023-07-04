import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ClientModule } from './modules/client/client.module';
import { TableModule } from './modules/table/table.module';
import { TableAccountModule } from './modules/table-account/table-account.module';

import { ClientsOnTableModule } from './modules/clients-on-table/clients-on-table.module';

import { OrderModule } from './modules/order/order.module';
import { ProductsOnOrdersController } from './modules/products-on-orders/products-on-orders.controller';
import { ProductsOnOrdersModule } from './modules/products-on-orders/products-on-orders.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    CategoryModule,
    ProductModule,
    ClientModule,
    TableModule,
    TableAccountModule,
    ClientsOnTableModule,
    OrderModule,
    ProductsOnOrdersModule,
  ],
  controllers: [ProductsOnOrdersController],
})
export class AppModule {}
