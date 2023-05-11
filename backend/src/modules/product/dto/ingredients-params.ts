import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class IngredientsParams {
  @IsUUID()
  @IsNotEmpty({ message: 'The ingredient id is required' })
  ingredientId: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The quantity is required' })
  quantity: number;
}
