import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CacheService } from '../../cache/cache.service';
import { Repository } from 'typeorm';
import { CityService } from '../city.service';
import { CityEntity } from '../entities/city.entity';

/* 
-------------------------------------------------
Parei na aula 22 - minuto 16:08
----------------------------------------------- */

describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue({}),
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });
});
