import { ProductOnOrders } from "./ProductOnOrders";

export type Order = {
  id: string;
  totalOrder: number;
  status: "Delivered" | "inProgress" | "Waiting";
  tableAccountId: string;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
  Products: ProductOnOrders[];
};
