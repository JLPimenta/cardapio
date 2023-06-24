import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ClientModule } from './modules/client/client.module';
import { TableModule } from './modules/table/table.module';
import { TableAccountModule } from './modules/table-account/table-account.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    CategoryModule,
    ProductModule,
    ClientModule,
    TableModule,
    TableAccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
