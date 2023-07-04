import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({ imports: [PrismaModule], controllers: [CategoryController] })
export class CategoryModule {}
