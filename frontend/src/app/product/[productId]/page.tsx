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

import { useOrderContext } from "@/components/contexts/OrderContext";
import { useForm } from "react-hook-form";
import { ProductOnOrders } from "@/shared/entities/ProductOnOrders";

export default function Product() {
  const [quantity, setQuantity] = useState<number>(1);
  const { productId } = useParams();
  const router = useRouter();

  const { makeOrder } = useOrderContext();

  const [product, setProduct] = useState<Product | any>();

  const { register, handleSubmit } = useForm<ProductOnOrders>();

  if (product) {
    product.price = parseFloat(product.price.toString()).toFixed(2);
  }

  useEffect(() => {
    api.get(`/products/${productId}`).then(({ data }) => {
      setProduct(data);
    });
  }, [productId]);

  const handleAddProductInOrder = async (data: any) => {
    const { note } = data;

    if (product) {
      await makeOrder({
        productId,
        note,
        price: (parseFloat(product.price) * quantity).toString(),
        quantity,
      });
    }
  };

  return (
    <div className="w-full flex-auto justify-center">
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
            {...register("note")}
          />
        </div>
      </div>

      <div className="fixed bottom-1 flex w-full justify-center pl-6 pr-6">
        <div className="flex w-full flex-row gap-3" style={{ maxWidth: 848 }}>
          <div className="flex flex-row items-center justify-center gap-3">
            <button
              id="minus"
              onClick={() => setQuantity((prev) => (prev = 1 ? 1 : prev - 1))}
            >
              <MinusIcon className="h-6 w-6 text-gray-500" />
            </button>

            <span className="text-base font-bold">{quantity}</span>

            <button id="plus" onClick={() => setQuantity((prev) => prev + 1)}>
              <PlusIcon className="h-6 w-6 text-orange-500" />
            </button>
          </div>
          <button
            onClick={handleSubmit(handleAddProductInOrder)}
            className="h-12 w-full rounded-lg bg-orange-400 p-3 text-lg text-white"
          >
            Adicionar R$ {parseFloat(product?.price) * quantity}
          </button>
        </div>
      </div>
    </div>
  );
}
