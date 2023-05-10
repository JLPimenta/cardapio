import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';
import { IngredientModule } from './modules/ingredient/ingredient.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, CategoryModule, IngredientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
