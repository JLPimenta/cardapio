import { Body, Controller, Post, Res } from '@nestjs/common';
import { CheckInClientsOnTableUseCaseRequest } from './use-cases/check-in';
import { makeCheckInClientsOnTableUseCase } from './factories/makeCheckInClientsOnTableUseCase';
import { Response } from 'express';

@Controller('clients')
export class ClientsOnTableController {
  @Post()
  async create(
    @Body() checkIn: CheckInClientsOnTableUseCaseRequest,
    @Res() response: Response,
  ) {
    const checkInClientsOnTableUseCase = makeCheckInClientsOnTableUseCase();

    try {
      response.set(await checkInClientsOnTableUseCase.execute(checkIn));
    } catch (error) {
      return response.status(400).send({ message: error.message });
    }
  }
}
