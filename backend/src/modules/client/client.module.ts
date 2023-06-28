import { Module } from '@nestjs/common';
import { PrismaClientsRepository } from './repositories/prisma/prisma-clients-repository';

@Module({
  exports: [PrismaClientsRepository],
  providers: [PrismaClientsRepository],
})
export class ClientModule {}
