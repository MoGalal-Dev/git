import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientService],
    }).compile();

    service = await moduleRef.resolve<ClientService>(ClientService);
    controller = await moduleRef.resolve<ClientController>(ClientController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findAllClients').mockImplementation(() => result);

      expect(await service.findAllClients ()).toBe(result);
    });
  });

});

/*import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;

  beforeEach(() => {
    service = new ClientService();
    controller = new ClientController(service);
    });

    describe('findAll', () => {
      it('should return an array of clients', async () => {
        const result = ['test'];
        jest.spyOn(service, 'findAllClients').mockImplementation(() => result);
  
        expect(await service.findAllClients()).toBe(result);
      });
    });
  
});*/
