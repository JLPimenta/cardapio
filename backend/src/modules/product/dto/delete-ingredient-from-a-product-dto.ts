import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteIngredientFromAProduct {
  @IsNotEmpty()
  @IsUUID()
  ingredientId: string;
}
