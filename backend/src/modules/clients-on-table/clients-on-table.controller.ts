import { Body, Controller, Post, Res } from '@nestjs/common';
import { CheckInClientsOnTableUseCaseRequest } from './use-cases/check-in';
import { makeCheckInClientsOnTableUseCase } from './factories/makeCheckInClientsOnTableUseCase';
import { Response } from 'express';

@Controller('clients')
export class ClientsOnTableController {
  @Post('checkin')
  async create(
    @Body() checkIn: CheckInClientsOnTableUseCaseRequest,
    @Res({ passthrough: true }) response: Response,
  ) {
    const checkInClientsOnTableUseCase = makeCheckInClientsOnTableUseCase();

    const checkInClient = checkInClientsOnTableUseCase.execute(checkIn);

    response.cookie('Client', checkInClient);

    return checkInClient;
  }
}
