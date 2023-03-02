import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserId } from 'src/decorators/user-id.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { CartService } from './cart.service';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { CartEntity } from './entities/cart.entity';

@Roles(UserType.User, UserType.Admin)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async insertCart(
    @Body() insertCart: InsertCartDTO,
    @UserId() userId: number,
  ): Promise<CartEntity> {
    return this.cartService.insertProductInCart(insertCart, userId);
  }
}
