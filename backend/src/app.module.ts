import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    CategoryModule,
    ProductModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
