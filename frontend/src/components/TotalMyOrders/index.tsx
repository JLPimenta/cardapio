import React from "react";

export default function TotalMyOrders() {
  return (
    <div className="flex h-[6.375rem] flex-col items-center justify-center gap-1 rounded-lg bg-orange-100">
      <span className="text-sm">Total dos meus pedidos</span>
      <span className="text-3xl font-bold">R$ 25,00</span>
    </div>
  );
}