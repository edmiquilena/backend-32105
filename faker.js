import { faker } from "@faker-js/faker";
faker.locale = "es_MX";
const { name, internet } = faker;
let info = [];
for (let index = 0; index < 20; index++) {
  info.push({
    nombre: `${name.firstName()} ${name.lastName()}`,
    email: internet.email(),
  });
}
console.table(info);
