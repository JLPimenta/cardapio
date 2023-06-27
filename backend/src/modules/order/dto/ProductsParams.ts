import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class ProductsParams {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsString()
  @IsOptional()
  note?: string;
}
