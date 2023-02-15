import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  // do async até o Promise <CityEntity[]>: Define o método para lidar com a rota `Get/city/:stateId`
  // Este método recebe o parâmetro `stateId` usando a anotação `@Param` e retorna uma lista de entidades
  // `cityEntity`. O método é definido como assíncrono usando a palavra async e retorna uma promise.
  async getAllCitiesByStateId(
    @Param('stateId') stateId: number,
  ): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(stateId);
  }
}
