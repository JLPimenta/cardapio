"use client";
import Image from "next/image";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Login() {
  const [data, setData] = useState("No result");

  return (
    <div className="w-screen">
      <div className="ml-auto mr-auto flex max-w-4xl flex-col justify-center gap-8 p-6">
        <div className="flex items-center justify-center">
          <Image src="ForkKnife.svg" alt="Logo App" width={37} height={37} />
        </div>
        <div className="flex items-center justify-center text-center">
          <p className="text-2xl font-bold">
            Seja bem vindo ao Meu Cardápio Online
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-700">Nome</span>
          <input
            className="h-10 rounded-md pb-2 pl-3 pr-3 pt-2 text-gray-700 outline-orange-400"
            type="text"
            placeholder="Digite o seu nome"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span>Agora vamos ler o QRCode da sua mesa </span>
          </div>
          <div className="flex h-52 w-52 items-center justify-center">
            <QrReader
              onResult={(result: any, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              constraints={{ facingMode: "environment" }}
            />
            <p>{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
