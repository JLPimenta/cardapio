import { Controller, Get, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ProductsOnOrder {
  name: string;
  id: string;
  price: string;
  quantity: number;
}

@Controller('products-on-order')
export class ProductsOnOrdersController {
  @Get(':id')
  async findAll(@Param('id') id: string) {
    const productsOnOrder =
      await prisma.$queryRaw<ProductsOnOrder>`select p."name",p.id ,p.price ,p.price,poo.quantity,p.description,p."urlImage"
      from "productsOnOrders" poo ,orders o ,	products p
      where o.id = ${id} and poo."productId" = p.id and o.id = poo."orderId"`;

    return productsOnOrder;
  }
}
