import { InMemoryTablesAccountRepository } from '../repositories/in-memory/in-memory-tables-account-repository';
import { NotFoundException } from '@nestjs/common';
import { UpdateTableAccountUseCase } from './update-table-account';

let inMemoryTablesAccountRepository: InMemoryTablesAccountRepository;
let sut: UpdateTableAccountUseCase;

describe('Update table account', () => {
  beforeEach(() => {
    inMemoryTablesAccountRepository = new InMemoryTablesAccountRepository();

    sut = new UpdateTableAccountUseCase(inMemoryTablesAccountRepository);

    inMemoryTablesAccountRepository.create({
      tableId: 'table-01',
      title: 'Mesa 01',
      totalTableAccount: '0',
      id: 'table-account-01',
    });
  });

  it('should be able to update a table account', async () => {
    const tableAccount = await sut.execute('table-account-01', {
      totalTableAccount: '25.0',
    });

    expect(tableAccount).toEqual(
      expect.objectContaining({ totalTableAccount: '25.0' }),
    );
    expect(inMemoryTablesAccountRepository.items[0]).toEqual(
      expect.objectContaining({ totalTableAccount: '25.0' }),
    );
  });

  it('should not be able to update a table account that not exists', () => {
    expect(async () => {
      return await sut.execute('table-account-02', {
        totalTableAccount: '25.0',
      });
    }).rejects.toBeInstanceOf(NotFoundException);
  });
});
