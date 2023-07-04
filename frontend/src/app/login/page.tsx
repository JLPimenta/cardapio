"use client";
import { useCheckInContext } from "@/components/contexts/CheckInContext";
import api from "@/service/api";
import { Table } from "@/service/interfaces/Table";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [tables, setTables] = useState<Table[]>([]);
  const [loadingTables, setLoadingTables] = useState(true);

  useEffect(() => {
    api.get("/tables").then(({ data }) => {
      setTables(data);
      setLoadingTables(false);
    });
  }, []);

  const { checkIn } = useCheckInContext();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, name, tableId } = {
      name: event.target.name.value,
      email: event.target.email.value,
      tableId: event.target.tables.value,
    };

    await checkIn({
      clientEmail: email,
      clientName: name,
      tableId: tableId,
    });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="ml-auto mr-auto flex max-w-4xl flex-col  gap-8 p-6 ">
        <div className="flex items-center justify-center">
          <Image src="ForkKnife.svg" alt="Logo App" width={37} height={37} />
        </div>
        <div className="flex items-center justify-center text-center">
          <p className="text-2xl font-bold">
            Seja bem vindo ao Meu Cardápio Online
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-gray-700">Nome</span>
                <input
                  className="h-12 rounded-lg pb-2 pl-3 pr-3 pt-2 text-gray-700 outline-orange-400"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite o seu nome"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-700">E-mail</span>
                <input
                  className="h-12 rounded-lg pb-2 pl-3 pr-3 pt-2 text-gray-700 outline-orange-400"
                  type="email"
                  placeholder="Digite o seu e-mail"
                  name="email"
                  id="email"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="block text-gray-700">Numero da mesa</label>

                <select
                  id="tables"
                  className="block h-12 w-full rounded-lg pb-2 pl-3 pr-3 pt-2 text-gray-700 outline-orange-400"
                  name="tables"
                  disabled={!!loadingTables}
                >
                  <option defaultValue={"Selecione uma mesa"}>
                    {loadingTables
                      ? "Aguarde! - Buscando mesas ⏳"
                      : "Selecione uma mesa"}
                  </option>
                  {loadingTables
                    ? undefined
                    : tables.map((item) => (
                        <option value={item.id} key={item.id}>
                          Mesa - {item.number}
                        </option>
                      ))}
                </select>
              </div>
            </div>
            <div className=" flex w-full justify-center">
              <button
                type="submit"
                style={{ maxWidth: 848 }}
                className="h-12 w-full rounded-lg bg-orange-400 p-3 text-lg text-white"
              >
                Ir para cardápio
              </button>
            </div>
          </div>
        </form>
        {/* <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-sm">
              Agora vamos ler o QRCode da sua mesa{" "}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-lg">
            <QrReader
              onResult={(result: any, error) => {
                if (!!result) {
                  setTableId(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              constraints={{ facingMode: "environment" }}
              className="w-32"
              videoStyle={""}
            />
            <p>{tableId}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
