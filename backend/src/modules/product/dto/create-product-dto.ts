import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsOptional()
  urlImage?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsNotEmpty()
  categoryId: string;

  @IsOptional()
  ingredients?: string[];
}
