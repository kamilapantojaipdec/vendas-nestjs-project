import { UserType } from '../enum/user-type.enum';
import { UserEntity } from '../interfaces/user.entity';

export const userEntityMock: UserEntity = {
  cpf: '12312312366',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$Tlke4KtYcb5EwzIJJ5upHeLJIr3gXwppp8O7Ly1XAlEpaXTchLmI.',
  phone: '999999999',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
