import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressEntity } from '../entities/address.entity';
import { AddressService } from '../address.service';
import { UserService } from '../../user/user.service';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { CityService } from '../../city/city.service';
import { cityMock } from '../../city/__mock__/city.mock';
import { addressMock } from '../__mocks__/address.mock';
import { createAddressMock } from '../__mocks__/create-address.mock';

describe('AddressService', () => {
  let service: AddressService;
  let userService: UserService;
  let cityService: CityService;
  let addressRepository: Repository<AddressEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: UserService,
          useValue: {
            findUserById: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
        {
          provide: CityService,
          useValue: {
            findCityById: jest.fn().mockResolvedValue(cityMock),
          },
        },
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(addressMock),
          },
        },
      ],
    }).compile();

    service = module.get<AddressService>(AddressService);
    userService = module.get<UserService>(UserService);
    cityService = module.get<CityService>(CityService);
    addressRepository = module.get<Repository<AddressEntity>>(
      getRepositoryToken(AddressEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityService).toBeDefined();
    expect(userService).toBeDefined();
    expect(addressRepository).toBeDefined();
  });

  it('should return address after save', async () => {
    const address = await service.createAddress(
      createAddressMock,
      userEntityMock.id,
    );
    expect(address).toEqual(addressMock);
  });

  it('should return error if exception in userService', async () => {
    jest.spyOn(userService, 'findUserById').mockRejectedValueOnce(new Error());

    expect(
      service.createAddress(createAddressMock, userEntityMock.id),
    ).rejects.toThrowError();
  });
});