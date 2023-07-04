import { Product } from "./Product";

export interface ProductOnOrders {
  id: string;
  name: string;
  price: string;
  quantity: number;
  description: string;
  urlImage: string;
  orderId: string;
  note: string;
  Product?: Product;
}
