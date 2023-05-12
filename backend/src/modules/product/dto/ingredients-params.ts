import { IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class IngredientsParams {
  @IsUUID()
  @IsNotEmpty({ message: 'The ingredient id is required' })
  ingredientId: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;
}
