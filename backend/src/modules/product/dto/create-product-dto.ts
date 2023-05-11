import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { IngredientsParams } from './ingredients-params';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty({ message: 'The name is required' })
  name: string;

  @IsNotEmpty({ message: 'The price is required' })
  price: number;

  @IsOptional()
  @IsUrl({ require_protocol: true }, { message: 'The url image is invalid' })
  urlImage?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsUUID()
  @IsNotEmpty({ message: 'The category id is required' })
  categoryId: string;

  @IsArray({ message: 'The ingredients must be an array' })
  @ValidateNested({ each: true })
  @Type(() => IngredientsParams)
  @IsOptional({ each: true })
  ingredients?: IngredientsParams[];
}
