"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { CheckInContextData } from "./interfaces/CheckInContextData";
import { checkIn } from "@/service/checkIn";
import { CheckInRequest } from "@/service/interfaces/CheckInRequest";
import { Client } from "@/service/interfaces/Client";
import { Table } from "@/service/interfaces/Table";
import { TableAccount } from "@/service/interfaces/TableAccount";
import { useRouter } from "next/navigation";
import api from "@/service/api";

const CheckInContext = createContext<CheckInContextData>(
  {} as CheckInContextData
);

export const CheckInContextProvider = ({ children }: any) => {
  const [client, setClient] = useState<Client | any>(null);
  const [table, setTable] = useState<Table | any>(null);
  const [tableAccount, setTableAccount] = useState<TableAccount | any>(null);

  const router = useRouter();

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedClient = localStorage.getItem("@Cardapio:client");
      const storagedTable = localStorage.getItem("@Cardapio:table");
      const storagedTableAccount = localStorage.getItem(
        "@Cardapio:tableAccount"
      );

      if (storagedClient && storagedTableAccount && storagedTable) {
        setClient(JSON.parse(storagedClient));
        setTable(JSON.parse(storagedTable));

        await api.get(`/table-account/${tableAccount?.id}`).then(({ data }) => {
          setTableAccount(data);
          localStorage.setItem("@Cardapio:tableAccount", JSON.stringify(data));
        });
      } else {
        router.replace("/login");
      }
    };
    loadStorageData();
  }, [router, tableAccount?.id]);

  const signIn = async ({
    clientEmail,
    clientName,
    tableId,
  }: CheckInRequest) => {
    const { client, table, tableAccount } = await checkIn({
      clientEmail,
      clientName,
      tableId,
    });

    localStorage.setItem("@Cardapio:client", JSON.stringify(client));
    localStorage.setItem("@Cardapio:table", JSON.stringify(table));
    localStorage.setItem(
      "@Cardapio:tableAccount",
      JSON.stringify(tableAccount)
    );

    setClient(client);
    setTable(table);
    setTableAccount(tableAccount);

    router.replace("/");
  };

  const checkOut = async () => {
    localStorage.clear();
    setClient(null);
    setTable(null);
    setTableAccount(null);

    router.replace("/login");
  };

  return (
    <CheckInContext.Provider
      value={{
        client,
        table,
        tableAccount,
        checkIn: signIn,
        checkOut,
        checked: !!client,
        setTableAccount,
      }}
    >
      {children}
    </CheckInContext.Provider>
  );
};

export const useCheckInContext = () => useContext(CheckInContext);
