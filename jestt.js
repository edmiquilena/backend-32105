// * funcion que sume dos valores y retorne el resultado
const suma = (num1, num2) => num1 + num2;
test("funcion de suma y retorne resultado", () => {
  expect(suma(3, 2)).toEqual(4);
});
