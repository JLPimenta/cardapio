"use client";
import api from "@/service/api";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { Product } from "../../../shared/entities/Product";
import TotalMyOrders from "@/components/TotalMyOrders";
import { useCheckInContext } from "@/components/contexts/CheckInContext";
import { Order } from "@/shared/entities/Order";
import { useOrderContext } from "@/components/contexts/OrderContext";

export default function Product() {
  const [quantity, setQuantity] = useState<number>(1);
  // const [order, setOrder] = useState<Order>();
  const { productId } = useParams();
  const router = useRouter();

  const { client, tableAccount } = useCheckInContext();
  const { order, makeOrder, setOrder } = useOrderContext();

  const [product, setProduct] = useState<Product>();

  if (product) {
    product.price = parseFloat(product.price.toString()).toFixed(2);
  }

  useEffect(() => {
    api.get(`/products/${productId}`).then(({ data }) => {
      setProduct(data);
    });
  }, [productId]);

  const handlleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { note } = { note: event.target.note.value };

    if (product) {
      makeOrder({ productId, note, price: product.price, quantity });
    }
  };

  return (
    <div className="w-full flex-auto justify-center">
      <form onSubmit={handlleSubmit}>
        <div className="ml-auto mr-auto flex max-w-4xl flex-col justify-center gap-8 p-6">
          <header className="flex items-center justify-between">
            <button
              onClick={() => {
                router.back();
              }}
            >
              <ChevronLeftIcon width={37} height={37} />
            </button>
            <div className="flex h-[2.313rem] w-[2.313rem] items-center justify-center rounded-full bg-orange-400">
              <span className="text-xl font-bold text-white">01</span>
            </div>
          </header>

          <TotalMyOrders />

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <span className="font-bold">{product?.name}</span>
              <span className="font-normal">
                {product?.description ? product.description : "..."}
              </span>
              <span className="font-bold">R$ {product?.price}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold">Observações</span>
            <input
              className="h-12 rounded-lg pb-2 pl-3 pr-3 pt-2 text-gray-700 outline-orange-400"
              type="text"
              placeholder="Ex: Tirar a maionese, ponto da carne"
              id="note"
              name="note"
            />
          </div>
        </div>

        <div className="fixed bottom-1 flex w-full justify-center pl-6 pr-6">
          <div className="flex w-full flex-row gap-3" style={{ maxWidth: 848 }}>
            <div className="flex flex-row items-center justify-center gap-3">
              <button
                onClick={() => setQuantity((prev) => (prev = 1 ? 1 : prev - 1))}
              >
                <MinusIcon className="h-6 w-6 text-gray-500" />
              </button>

              <span className="text-base font-bold">{quantity}</span>

              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <PlusIcon className="h-6 w-6 text-orange-500" />
              </button>
            </div>
            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-orange-400 p-3 text-lg text-white"
            >
              Adicionar R$ {product?.price}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
