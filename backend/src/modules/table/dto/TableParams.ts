import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TableParams {
  @IsNumber()
  @IsNotEmpty({ message: 'Table number is required' })
  number: number;

  @IsBoolean()
  @IsOptional()
  isAvaliable?: boolean;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
