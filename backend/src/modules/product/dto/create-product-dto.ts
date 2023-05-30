import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
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
}
