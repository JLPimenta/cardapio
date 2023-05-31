export type Product = {
  id: string;
  name: string;
  price: number;
  urlImage: string | null;
  description: string | null;
  isActive: boolean;
  categoryId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
