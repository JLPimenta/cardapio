import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTableAccountDto {
  @IsString()
  @IsNotEmpty()
  title = Date.now().toLocaleString('pt-BR');

  @IsNotEmpty()
  @IsNumber()
  totalTableAccount: number;

  @IsDateString()
  @IsNotEmpty()
  openAt?: Date;

  @IsDateString() // YYYY-MM-DDTHH:mm:ss.SSSZ
  @IsOptional()
  closedAt?: Date;

  @IsUUID()
  @IsNotEmpty({ message: 'The table id is required' })
  tableId: string;
}
