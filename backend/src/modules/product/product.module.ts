import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductController } from './product.controller';

@Module({ imports: [PrismaModule], controllers: [ProductController], providers: [] })
export class ProductModule {}
