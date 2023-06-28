import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategies';
import { LocalStrategy } from './strategies/local.strategies';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ClientModule } from '../client/client.module';
import { TableModule } from '../table/table.module';
import { TableAccountModule } from '../table-account/table-account.module';

@Module({
  imports: [
    PassportModule,
    ClientModule,
    TableModule,
    TableAccountModule,
    JwtModule,
    JwtModule.register({
      privateKey: process.env.JWT_PRIVATE_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
