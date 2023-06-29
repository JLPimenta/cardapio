import React from "react";
import Image from "next/image";
import { useCheckInContext } from "../contexts/CheckInContext";

export default function Header() {
  const { table } = useCheckInContext();

  return (
    <header className="flex items-center justify-between">
      <Image src="ForkKnife.svg" alt="Logo App" width={37} height={37} />
      <div className="flex h-[2.313rem] w-[2.313rem] items-center justify-center rounded-full bg-orange-400">
        <span className="text-xl font-bold text-white">
          {table ? table.number : undefined}
        </span>
      </div>
    </header>
  );
}
