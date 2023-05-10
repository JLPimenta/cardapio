export class CreateProductDto {
  title: string;
  price: number;
  description?: string;
  ingredients?: string[];
  isActive = true;
}
