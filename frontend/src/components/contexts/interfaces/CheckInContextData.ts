import { Client } from "@/service/interfaces/Client";
import { CheckInRequest } from "@/service/interfaces/CheckInRequest";
import { Table } from "@/service/interfaces/Table";
import { TableAccount } from "@/service/interfaces/TableAccount";
import { Dispatch } from "react";

export interface CheckInContextData {
  client: Client;
  table: Table;
  tableAccount: TableAccount;
  checkIn(data: CheckInRequest): Promise<void>;
  checkOut(): Promise<void>;
  checked: boolean;
  setTableAccount: Dispatch<any>;
}
