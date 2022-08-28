import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ClientModule } from '../src/client/client.module';
import { ClientService } from '../src/client/client.service';
import { INestApplication } from '@nestjs/common';

describe('Client', () => {
  let app: INestApplication;
  let clientService = { findAllClients: () => [
{id=1,name="fgfgd"},


  ] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ClientModule],
    })
      .overrideProvider(ClientService)
      .useValue(clientService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET client`, () => {
    return request(app.getHttpServer())
      .get('/client')
      .expect(200)
      .expect({
        data: clientService.findAllClients(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});