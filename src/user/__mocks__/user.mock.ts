import { UserType } from '../enum/user-type.enum';
import { UserEntity } from '../interfaces/user.entity';

export const userEntityMock: UserEntity = {
  cpf: '12312312366',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 43242,
  name: 'nameMock',
  password: 'largePassword',
  phone: '999999999',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
