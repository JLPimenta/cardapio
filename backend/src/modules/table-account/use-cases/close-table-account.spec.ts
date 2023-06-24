import { InMemoryTablesAccountRepository } from '../repositories/in-memory/in-memory-tables-account-repository';
import { NotFoundException } from '@nestjs/common';
import { CloseTableAccountUseCase } from './close-table-account';

let inMemoryTablesAccountRepository: InMemoryTablesAccountRepository;
let sut: CloseTableAccountUseCase;

describe('Close table account', () => {
  beforeEach(() => {
    inMemoryTablesAccountRepository = new InMemoryTablesAccountRepository();

    sut = new CloseTableAccountUseCase(inMemoryTablesAccountRepository);

    inMemoryTablesAccountRepository.create({
      tableId: 'table-01',
      title: 'Mesa 01',
      totalTableAccount: '0',
      id: 'table-account-01',
    });
  });

  it('should be able to close a table account', async () => {
    const tableAccount = await sut.execute('table-account-01');

    expect(tableAccount.closedAt).toBeTruthy();
    expect(inMemoryTablesAccountRepository.items[0].closedAt).toEqual(
      tableAccount.closedAt,
    );
  });

  it('should not be able to close a table account that not exists', async () => {
    expect(async () => {
      return await sut.execute('table-account-02');
    }).rejects.toBeInstanceOf(NotFoundException);
  });
});
