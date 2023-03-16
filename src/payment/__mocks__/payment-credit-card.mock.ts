import { PaymentCreditCardEntity } from '../entities/payment-credit-card.entity';
import { paymentMock } from '../__mocks__/payment.mock';

export const paymentCreditCardMock: PaymentCreditCardEntity = {
  ...paymentMock,
  amountPayments: 54,
};
