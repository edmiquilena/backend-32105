import { ContenedorMongo } from "../../contenedores/contenerArchivo";

// new ContenedorMongo('carritos', ...)
export class CarritoDaoMongo extends ContenedorMongo {
  // constructor(coleccion, esquema) {
  //     this.col = mongoose.model(coleccion, esquema);
  //   }

  constructor() {
    super("carritos", {
      productos: { type: Array, required: true },
    });
  }

  // .......
  eliminarStock() {}
}
