import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsOptional()
  @IsNumber()
  // amount payment = valor do pagamento
  amountPayment?: number;

  @IsOptional()
  @IsString()
  codePix?: string;

  @IsOptional()
  @IsString()
  datePayment?: string;
}
