import { Client } from "@/service/interfaces/Client";
import { CheckInRequest } from "@/service/interfaces/CheckInRequest";
import { Table } from "@/service/interfaces/Table";
import { TableAccount } from "@/service/interfaces/TableAccount";
import { ClientResponse } from "@/service/interfaces/ClientResponse";

export interface CheckInContextData {
  checkInData: ClientResponse;
  checkIn(data: CheckInRequest): Promise<void>;
  checked: boolean;
}
