import { StatusOrder } from '@prisma/client';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProductsParams } from './ProductsParams';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  totalOrder: number;

  @IsOptional()
  statusOrder?: StatusOrder;

  @IsNotEmpty()
  @IsUUID()
  tableAccountId: string;

  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @IsArray({ message: 'The ingredients must be an array' })
  @ValidateNested({ each: true })
  @Type(() => ProductsParams)
  @IsOptional({ each: true })
  products: ProductsParams[];
}
