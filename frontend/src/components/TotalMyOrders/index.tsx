import React from "react";

export default function TotalMyOrders() {
  return (
    <div className="flex h-[6.375rem] flex-col items-center justify-center gap-1 rounded-lg bg-orange-100">
      <span style={{ fontSize: 14 }}>Total dos meus pedidos</span>
      <span style={{ fontWeight: "bold", fontSize: 32 }}>R$ 25,00</span>
    </div>
  );
}
