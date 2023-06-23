import { InMemoryClientsRepository } from '../repositories/in-memory/in-memory-clients-repository';
import { CreateClientUseCase } from './create';

let inMemoryClientsRepository: InMemoryClientsRepository;
let sut: CreateClientUseCase;

describe('Create clients', () => {
  beforeEach(async () => {
    inMemoryClientsRepository = new InMemoryClientsRepository();
    sut = new CreateClientUseCase(inMemoryClientsRepository);
  });

  it('should be able to create a client', async () => {
    const client = await sut.execute({ name: 'Elioenay', id: 'client-1' });

    expect(client).toEqual(
      expect.objectContaining({ name: 'Elioenay', id: 'client-1' }),
    );
    expect(inMemoryClientsRepository.items).toHaveLength(1);
    expect(inMemoryClientsRepository.items[0]).toEqual(
      expect.objectContaining({ name: 'Elioenay', id: 'client-1' }),
    );
  });
});
