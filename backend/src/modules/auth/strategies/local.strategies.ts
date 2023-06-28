import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, name: string, tableId: string) {
    const table = await this.authService.validateTable(tableId);

    if (!table) throw new UnauthorizedException('Invalid credentials');

    const client = await prisma.client.create({ data: { name, email } });

    return client;
  }
}
