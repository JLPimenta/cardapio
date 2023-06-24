import { InMemoryTablesRepository } from 'src/modules/table/repositories/in-memory/in-memory-tables-repository';
import { InMemoryTablesAccountRepository } from '../repositories/in-memory/in-memory-tables-account-repository';
import { CreateTableAccountUseCase } from './create-table-account';
import { ConflictException } from '@nestjs/common';

let inMemoryTablesAccountRepository: InMemoryTablesAccountRepository;
let inMemoryTablesRepository: InMemoryTablesRepository;
let sut: CreateTableAccountUseCase;

describe('Create table account', () => {
  beforeEach(() => {
    inMemoryTablesAccountRepository = new InMemoryTablesAccountRepository();

    inMemoryTablesRepository = new InMemoryTablesRepository();

    sut = new CreateTableAccountUseCase(
      inMemoryTablesAccountRepository,
      inMemoryTablesRepository,
    );

    inMemoryTablesRepository.create({ number: '01', id: 'table-01' });
  });

  it('should be able to create a table account', async () => {
    const tableAccount = await sut.execute({
      tableId: 'table-01',
      title: 'Mesa 01',
      totalTableAccount: '0',
    });

    expect(tableAccount).toEqual(
      expect.objectContaining({
        tableId: 'table-01',
        title: 'Mesa 01',
        totalTableAccount: '0',
      }),
    );
  });

  it('should not be able to create a table account with a invalid tableId', async () => {
    expect(() => {
      return sut.execute({
        tableId: 'table-02',
        title: 'Mesa 01',
        totalTableAccount: '0',
      });
    }).rejects.toBeInstanceOf(ConflictException);
  });

  it('should not be able to create a table account to a table that already has a tableAccount', async () => {
    await sut.execute({
      tableId: 'table-01',
      title: 'Mesa 01',
      totalTableAccount: '0',
    });

    expect(() => {
      return sut.execute({
        tableId: 'table-01',
        title: 'Mesa 01',
        totalTableAccount: '0',
      });
    }).rejects.toBeInstanceOf(ConflictException);
  });
});
