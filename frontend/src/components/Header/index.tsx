import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-[21.875rem] items-center justify-between">
      <Image src="ForkKnife.svg" alt="Logo App" width={37} height={37} />
      <div className="flex h-[2.313rem] w-[2.313rem] items-center justify-center rounded-full bg-orange-300">
        <span className="text-xl font-bold text-white">01</span>
      </div>
    </header>
  );
}
