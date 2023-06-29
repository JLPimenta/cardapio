"use client";
import api from "@/service/api";
import { Order } from "@/shared/entities/Order";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCheckInContext } from "./CheckInContext";
import { useRouter } from "next/navigation";

export interface ContextOrderData {
  order: Order;
  makeOrder(data: OrderRequest): Promise<void>;
  clearOrder(): void;
  setOrder: Dispatch<any>;
}

export interface OrderRequest {
  productId: string;
  price: string;
  quantity: number;
  note: string;
}

const ContextOrder = createContext<ContextOrderData>({} as ContextOrderData);

export const ContexOrderProvider = ({ children }: any) => {
  const [order, setOrder] = useState<Order | any>(null);
  const { client, tableAccount } = useCheckInContext();

  const router = useRouter();

  useEffect(() => {
    const loadStorageData = () => {
      const storagedOrder = localStorage.getItem("@Cardapio:Order");

      if (storagedOrder) {
        setOrder(JSON.parse(storagedOrder));
      }
    };

    loadStorageData();
  }, []);

  const makeOrder = async ({
    productId,
    price,
    quantity,
    note,
  }: OrderRequest) => {
    if (!order) {
      await api
        .post(`/order`, {
          totalOrder: parseFloat(price),
          clientId: client.id,
          tableAccountId: tableAccount.id,
          products: [
            {
              id: productId,
              quantity,
              note: note ? note : undefined,
            },
          ],
        })
        .then(({ data }) => {
          setOrder(data.order);
          localStorage.setItem("@Cardapio:Order", JSON.stringify(data.order));
          router.back();
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    } else {
      await api
        .put(`/order/${order.id}`, {
          totalOrder: parseFloat(order.totalOrder) + parseFloat(price),
          clientId: client.id,
          tableAccountId: tableAccount.id,
          products: [
            {
              id: productId,
              quantity,
              note: note ? note : undefined,
            },
          ],
        })
        .then(({ data }) => {
          setOrder(data);
          localStorage.setItem("@Cardapio:Order", JSON.stringify(data));
          router.back();
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    }
  };
  const clearOrder = () => {};

  return (
    <ContextOrder.Provider value={{ clearOrder, order, makeOrder, setOrder }}>
      {children}
    </ContextOrder.Provider>
  );
};

export const useOrderContext = () => useContext(ContextOrder);
