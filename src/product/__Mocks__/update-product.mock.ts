import { categoryMock } from '../../category/__mocks__/category.mock';
import { UpdateProductDTO } from '../dtos/update-product.dto';

export const updateProductMock: UpdateProductDTO = {
  categoryId: categoryMock.id,
  image: 'imagem super top',
  name: 'nome da imagem super top',
  price: 30.0,
};
