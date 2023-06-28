import { Client, Table } from '@prisma/client';
import { Request } from 'express';

export default interface RequestWithClient extends Request {
  client: Client;
  table: Table;
}
