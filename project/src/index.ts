import { isValidCPF } from "./helpers/validators";

type OrderProduct = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

function calculateDiscount(amount: number, discountPercentage: number) {
  const discount = (amount * discountPercentage) / 100;
  return amount - discount;
}

export function generateOrder(
  userCpf: string,
  orderProducts: OrderProduct[],
  discountPercentage?: number
) {
  if (!userCpf || !isValidCPF(userCpf)) {
    throw new Error("INVALID_CPF");
  }

  let orderAmount = 0;

  orderProducts.forEach((orderProduct) => {
    const totalProductsPrice = orderProduct.price * orderProduct.quantity;
    orderAmount += totalProductsPrice;
  });

  if (discountPercentage)
    orderAmount = calculateDiscount(orderAmount, discountPercentage);

  return orderAmount;
}
