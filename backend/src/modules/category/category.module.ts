import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CategoryController } from './category.controller';

@Module({ imports: [PrismaClient], controllers: [CategoryController] })
export class CategoryModule {}
