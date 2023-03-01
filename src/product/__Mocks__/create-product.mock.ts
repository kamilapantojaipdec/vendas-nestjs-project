import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDTO } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDTO = {
  categoryId: categoryMock.id,
  image: 'imagem 4k high definition',
  name: 'name product mock',
  price: 25.0,
};
