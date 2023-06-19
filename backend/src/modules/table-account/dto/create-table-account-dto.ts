import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTableAccountDto {
  @IsString()
  @IsOptional()
  title? = Date.now().toLocaleString('pt-BR');

  @IsNotEmpty()
  @IsNumber()
  totalTableAccount: number;

  @IsDate()
  @IsNotEmpty()
  openAt: Date;

  @IsDate()
  @IsOptional()
  closedAt?: Date;

  @IsUUID()
  @IsNotEmpty({ message: 'The table id is required' })
  tableId: string;
}
