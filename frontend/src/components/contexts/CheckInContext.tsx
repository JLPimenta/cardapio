"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { CheckInContextData } from "./interfaces/CheckInContextData";
import { checkIn } from "@/service/checkIn";
import { CheckInRequest } from "@/service/interfaces/CheckInRequest";
import { ClientResponse } from "@/service/interfaces/ClientResponse";

import { cookies } from "next/headers";

const CheckInContext = createContext<CheckInContextData>(
  {} as CheckInContextData
);

export const CheckInContextProvider = ({ children }: any) => {
  const [checkInData, setCheckInData] = useState<any | ClientResponse>();

  const cookiesStore = cookies();

  useEffect(() => {
    const loadStorageData = async () => {
      const checkIn = cookiesStore.get("CheckInData");

      if (checkIn !== undefined) {
        setCheckInData(JSON.parse(checkIn.value));
      }
    };
    loadStorageData();
  });

  const signIn = async ({
    clientEmail,
    clientName,
    tableId,
  }: CheckInRequest) => {
    const checkInData = await checkIn({ clientEmail, clientName, tableId });

    setCheckInData(checkInData);
  };

  return (
    <CheckInContext.Provider
      value={{ checkInData, checkIn: signIn, checked: !!checkInData }}
    >
      {children}
    </CheckInContext.Provider>
  );
};

export const useCheckInContext = () => useContext(CheckInContext);
