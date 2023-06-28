import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaClientsRepository } from 'src/modules/client/repositories/prisma/prisma-clients-repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly clientsRepository: PrismaClientsRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_PRIVATE_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.clientsRepository.findByEmail(payload.sub);

    return user;
  }
}
