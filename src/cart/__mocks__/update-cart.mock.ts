import { productMock } from '../../product/__Mocks__/product.mock';
import { UpdateCartDTO } from '../dtos/update-cart.dto';

export const updateCartMock: UpdateCartDTO = {
  amount: 54638,
  productId: productMock.id,
};
