import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { Public, Roles } from './roles.decorator';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { RolesGuard } from './roles.guard';

@Controller('client')
@UseGuards(RolesGuard)
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Public()
  @Get()
  //@Roles('admin')
  findAll() {
    return this.clientService.findAllClients();
  }

  @Get(':id')
  //@Roles('admin')
  findOne(@Param('id') id: string) {
    return this.clientService.findOneClient(+id);
  }

  @Post('create')
  //@Roles('superAdmin')
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }

  @Patch(':id')
  //@Roles('superAdmin')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.updateClient(+id, updateClientDto);
  }

  @Delete(':id')
  //@Roles('superAdmin')
  remove(@Param('id') id: string) {
    return this.clientService.removeClient(+id);
  }
}