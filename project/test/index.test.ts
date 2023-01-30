import { generateOrder } from "../src";
import { orderProductsMock, userCpfMock } from "./index.mock";

test("Deve criar um pedido com 3 produtos e retornar o valor total do pedido.", function () {
  const orderAmount = generateOrder(userCpfMock, orderProductsMock);
  expect(orderAmount).toBe(85);
});

test("Deve criar um pedido com 3 produtos e retornar o valor total do pedido com o desconto informado.", function () {
  const discountPercentageMock = 10;
  const orderAmount = generateOrder(
    userCpfMock,
    orderProductsMock,
    discountPercentageMock
  );
  expect(orderAmount).toBe(76.5);
});

test("Não deve criar um pedido e retornar um erro quando o CPF informado for inválido.", function () {
  expect(() => generateOrder("12345678900", orderProductsMock)).toThrowError(
    "INVALID_CPF"
  );
});

test("Não deve criar um pedido e retornar um erro quando o CPF não for informado.", function () {
  expect(() => generateOrder("", orderProductsMock)).toThrowError(
    "INVALID_CPF"
  );
});
