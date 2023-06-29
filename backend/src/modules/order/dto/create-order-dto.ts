import { StatusOrder } from '@prisma/client';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProductParams } from './product-params';
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

  @IsNotEmpty({ each: true })
  @IsArray({ message: 'The product must be an array' })
  @ValidateNested({ each: true })
  @Type(() => ProductParams)
  products: ProductParams[];
}
