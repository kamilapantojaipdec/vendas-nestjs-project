import { cartMock } from '../../cart/__mocks__/cart.mock';
import { productMock } from '../../product/__Mocks__/product.mock';
import { CartProductEntity } from '../entities/cart-product.entity';

export const cartProductMock: CartProductEntity = {
  amount: 5435,
  cartId: cartMock.id,
  createdAt: new Date(),
  id: 234,
  productId: productMock.id,
  updatedAt: new Date(),
};
