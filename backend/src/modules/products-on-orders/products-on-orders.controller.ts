import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const prisma = new PrismaService();

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
    const productsOnOrder = await prisma.$queryRaw<ProductsOnOrder>`
      select p."name",p.id ,p.price,poo.quantity,p.description,p."urlImage",o.id as "orderId"
      from "productsOnOrders" poo ,orders o ,	products p
      where o.id = ${id} and poo."productId" = p.id and o.id = poo."orderId"`;

    return productsOnOrder;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const productOnOrder = await prisma.productsOnOrders.findFirst({
      where: { productId: id },
    });

    await prisma.productsOnOrders.delete({
      where: { id: productOnOrder.id },
    });
  }
}
