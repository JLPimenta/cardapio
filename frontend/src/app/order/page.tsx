"use client";
import TotalMyOrders from "@/components/TotalMyOrders";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();

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
          <span className="font-bold">Itens no pedido</span>
        </div>

        <div className="flex flex-col gap-3 pb-10">
          <div className="flex flex-row justify-between gap-2 rounded-lg border border-solid border-gray-300 p-3">
            <div className="flex flex-row gap-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/x-tudo.png"
                  style={{
                    minWidth: 80,
                    height: 80,
                    borderRadius: 6,
                    objectFit: "fill",
                  }}
                  alt="{`${item.description}`}"
                  width={80}
                  height={80}
                  quality={100}
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 text-sm font-normal">
                <span>X-Tudo</span>

                <span>R$ 15,00</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <button>
                <MinusIcon className="h-6 w-6 text-gray-500" />
              </button>

              <span className="text-sm font-bold">1</span>

              <button>
                <PlusIcon className="h-6 w-6 text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-1 flex w-full justify-center pl-6 pr-6">
        <button
          style={{ maxWidth: 848 }}
          className="h-12 w-full rounded-lg bg-orange-400 p-3 text-lg text-white"
        >
          Fazer pedido R$ 15,00
        </button>
      </div>
    </div>
  );
}
