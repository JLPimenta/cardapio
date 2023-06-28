import { Client } from "./Client";
import { Table } from "./Table";
import { TableAccount } from "./TableAccount";

export interface ClientResponse {
  client: Client;
  table: Table;
  tableAccount: TableAccount;
}
