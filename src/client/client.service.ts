import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from '../prisma.service';
import { client, Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  findAllClients() {
    return this.prisma.client.findMany({
      select: {
        Id: true,
        FireBaseId: true,
        Name: true,
        Email: true,
        grade: {
          include:{
            educationtype: {
              select: {
                Name: true,
              }
            }
          }
        },
        Avatar: true,
        PhoneNumber: true,
        Points: true,
        Rank: true,
        Balance: true,
        ClientLiveToken: true,
        CreatedDate: true,
      }
    });
  }

  findOneClient(id: number) {
    return this.prisma.client.findUnique({
      where: {
        Id: id
      },
      select: {
        Id: true,
        FireBaseId: true,
        Name: true,
        Email: true,
        grade: {
          include:{
            educationtype: {
              select: {
                Name: true,
              }
            }
          }
        },
        Avatar: true,
        PhoneNumber: true,
        Points: true,
        Rank: true,
        Balance: true,
        ClientLiveToken: true,
        CreatedDate: true,
      }
    });
  }

  async createClient(createClientDto: CreateClientDto) {
    let date = new Date();
    return this.prisma.client.create({
      data: {
        ...createClientDto,
        CreatedDate: date.toISOString()
      }
    });
  }

  updateClient(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      data: {
        ...updateClientDto,
        device:{
          create:{
            Type: updateClientDto.Device.Type,
            Status: updateClientDto.Device.Status,
            deviceToken: updateClientDto.Device.deviceToken
          }
        },
      },
      where: {
        Id: updateClientDto.Id
      }
    });
  }

  removeClient(id: number) {
    return this.prisma.client.delete({
      where: {
        Id: id
      }
    });
  }
}
