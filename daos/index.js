import { CarritoDaoMongo } from "./carrito/CarritoDaoMongo";
import { ProductoDaoMongo } from "./productos/productosDaoMongo";
import { CarritoDaoMongo } from "./carrito/CarritoDaoMongo";
import { ProductoDaoMongo } from "./productos/productosDaoMongo";
import { CarritoDaoMongo } from "./carrito/CarritoDaoMongo";
import { ProductoDaoMongo } from "./productos/productosDaoMongo";
import { CarritoDaoMongo } from "./carrito/CarritoDaoMongo";
import { ProductoDaoMongo } from "./productos/productosDaoMongo";
let ProductosDAO;
let CarritoDAO;
switch (process.env.TIPO) {
  case "mongo":
    CarritoDAO = new CarritoDaoMongo();
    ProductosDAO = new ProductoDaoMongo();

    break;

  case "firebase":
    CarritoDAO = new CarritoDaoFirebase();
    ProductosDAO = new ProductoFirebase();

    break;
}

export { ProductosDAO, CarritoDAO };
