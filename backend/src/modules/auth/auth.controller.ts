import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import RequestWithClient from 'src/helpers/requestWithClient.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: RequestWithClient) {
    const client = await this.authService.login(req.client, req.table.id);

    return client;
  }
}
