"use client";
import TotalMyOrders from "@/components/TotalMyOrders";
import { useCheckInContext } from "@/components/contexts/CheckInContext";
import { useOrderContext } from "@/components/contexts/OrderContext";
import api from "@/service/api";
import { Order } from "@/shared/entities/Order";
import { ProductOnOrders } from "@/shared/entities/ProductOnOrders";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyOrders() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  const { client, tableAccount, table } = useCheckInContext();

  useEffect(() => {
    api
      .get("/order", {
        params: { clientId: client?.id, tableAccountId: tableAccount?.id },
      })
      .then(({ data }) => {
        setOrders(data);
      });
  }, [client?.id, tableAccount?.id]);

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
            <span className="text-xl font-bold text-white">
              {table?.number}
            </span>
          </div>
        </header>

        <TotalMyOrders />

        <div>
          <span className="font-bold">Pedidos</span>
        </div>

        <div className="flex flex-col gap-8 pb-10">
          {orders.map((item) => (
            <div className="flex flex-col gap-2" key={item.id}>
              <p className="text-base font-bold">
                {new Date(item?.createdAt).toLocaleDateString()}
              </p>
              <div className="flex flex-row justify-between gap-3 rounded-lg border border-solid border-gray-300 p-3">
                <div className="flex items-center justify-center">
                  <span className="text-xs font-bold">
                    {moment(item?.createdAt).format("H:mm")}
                  </span>
                </div>
                <div className="flex flex-col">
                  {item.Products.map((item) => (
                    <div key={item.id} className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span className="text-xs font-normal text-gray-400">
                          {item.quantity}x
                        </span>

                        <span className="text-sm font-normal">
                          {item.Product?.name}
                        </span>

                        <span className="text-sm font-normal  text-gray-400">
                          {"- "}R$ {item.Product?.price}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-row gap-2">
                    <span className="text-sm font-semibold">
                      Total do pedido
                    </span>
                    <span className="text-sm">R$ {item.totalOrder}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {item.status === "Waiting" ? (
                    <EllipsisHorizontalCircleIcon className="h-5 w-5 text-orange-500" />
                  ) : (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
