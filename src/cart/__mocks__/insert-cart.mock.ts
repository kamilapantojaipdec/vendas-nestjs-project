import { productMock } from '../../product/__Mocks__/product.mock';
import { InsertCartDTO } from '../dtos/insert-cart.dto';

export const insertCartMock: InsertCartDTO = {
  amount: 535,
  productId: productMock.id,
};
