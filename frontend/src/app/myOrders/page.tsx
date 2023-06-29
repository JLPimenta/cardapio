"use client";
import { useCheckInContext } from "@/components/contexts/CheckInContext";
import api from "@/service/api";
import { Order } from "@/shared/entities/Order";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Order() {
  const router = useRouter();
  const [orders, setOrders] = useState<any>([]);

  const { client, tableAccount, table } = useCheckInContext();

  useEffect(() => {
    api
      .get("/order", {
        params: { clientId: client?.id, tableAccountId: tableAccount?.id },
      })
      .then(({ data }) => {
        console.log(data);

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
            <span className="text-xl font-bold text-white">{table.number}</span>
          </div>
        </header>

        <div className="flex h-[6.375rem] flex-col items-center justify-center gap-1 rounded-lg bg-orange-100 p-3">
          <span className="text-sm">Total dos meus pedidos</span>
          <span className="text-3xl font-bold">R$ 25,00</span>
          <span className="text-sm">
            Clique para visualizar o total da mesa
          </span>
        </div>

        <div>
          <span className="font-bold">Pedidos</span>
        </div>

        <div className="flex flex-col gap-8 pb-10">
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold">12/08/2022</p>
            <div className="flex flex-row justify-between rounded-lg border border-solid border-gray-300 p-3">
              <div className="flex items-center justify-center">
                <span className="text-xs font-bold">08:30</span>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <span className="text-xs font-normal text-gray-400">1x</span>

                  <span className="text-sm font-normal">X-Tudo</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-xs font-normal text-gray-400">1x</span>

                  <span className="text-sm font-normal">
                    Coca Cola 2 Litros
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button>
                  <EllipsisHorizontalCircleIcon className="h-5 w-5 text-orange-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold">12/08/2022</p>
            <div className="flex flex-row justify-between rounded-lg border border-solid border-gray-300 p-3">
              <div className="flex items-center justify-center">
                <span className="text-xs font-bold">08:30</span>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <span className="text-xs font-normal text-gray-400">1x</span>

                  <span className="text-sm font-normal">X-Tudo</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-xs font-normal text-gray-400">1x</span>

                  <span className="text-sm font-normal">
                    Coca Cola 2 Litros
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button>
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
