import { stateMock } from '../../state/__mock__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  id: 6543543,
  name: 'cityName',
  stateId: stateMock.id,
  updatedAt: new Date(),
};
