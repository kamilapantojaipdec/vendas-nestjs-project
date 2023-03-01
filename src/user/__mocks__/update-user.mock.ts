import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: '12345',
  newPassword: 'fdsafj',
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
  lastPassword: 'lkfdjsa',
  newPassword: 'flkjbla',
};
