import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from '../prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [AutomapperModule],
  controllers: [ClientController],
  providers: [ClientService, PrismaService]
})
export class ClientModule {}
