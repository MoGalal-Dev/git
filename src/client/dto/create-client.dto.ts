import { AutoMap } from '@automapper/classes';

export class Device {
    @AutoMap()
    Type?: string

    @AutoMap()
    Status?: string

    @AutoMap()
    deviceToken?: string
}

export class CreateClientDto {
    @AutoMap()
    Id?: number

    @AutoMap()
    FireBaseId: string

    @AutoMap()
    Name: string

    @AutoMap()
    Email?: string

    @AutoMap()
    Password?: string

    @AutoMap()
    EducationTypeId: number

    @AutoMap()
    GradeId: number

    @AutoMap()
    Avatar: number

    @AutoMap()
    PhoneNumber: string

    @AutoMap()
    Points: number

    @AutoMap()
    Rank: number

    @AutoMap()
    Balance: number

    @AutoMap()
    ClientLiveToken?: string    

    @AutoMap()
    CreatedDate: Date

    @AutoMap(() => Device)
    Device: Device
}


