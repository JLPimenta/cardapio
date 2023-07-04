import { Module } from '@nestjs/common';
import { PrismaClientsRepository } from './repositories/prisma/prisma-clients-repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  exports: [PrismaClientsRepository],
  providers: [PrismaClientsRepository],
  imports: [PrismaModule],
})
export class ClientModule {}
