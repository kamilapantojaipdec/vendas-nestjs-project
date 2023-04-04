import { ReturnOderDTO } from 'src/order/dtos/return-order.dto';
import { ReturnProduct } from 'src/product/dtos/return-product.dto';
import { OrderProductEntity } from '../entities/order-product.entity';

export class ReturnOrderProductDTO {
  id: number;
  orderId: number;
  productId: number;
  amount: number;
  price: number;
  orders?: ReturnOderDTO;
  product?: ReturnProduct;

  constructor(orderProduct: OrderProductEntity) {
    this.id = orderProduct.id;
    this.orderId = orderProduct.amount;
    this.productId = orderProduct.productId;
    this.amount = orderProduct.amount;
    this.price = orderProduct.price;
    this.orders = orderProduct.orders
      ? new ReturnOderDTO(orderProduct.orders)
      : undefined;
    this.product = orderProduct.product
      ? new ReturnProduct(orderProduct.product)
      : undefined;
  }
}
