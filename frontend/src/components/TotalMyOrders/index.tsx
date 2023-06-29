"use client";
import React from "react";
import { useCheckInContext } from "../contexts/CheckInContext";
import { useRouter } from "next/navigation";

export default function TotalMyOrders() {
  const { tableAccount } = useCheckInContext();
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("myOrders")}
      className="flex h-[6.375rem] flex-col items-center justify-center gap-1 rounded-lg bg-orange-100"
    >
      <span className="text-sm">Total da mesa</span>
      <span className="text-3xl font-bold">
        R$ {tableAccount ? tableAccount.totalTableAccount : undefined}
      </span>
    </button>
  );
}
