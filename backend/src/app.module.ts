import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
