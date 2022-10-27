import { ContenedorMongo } from "../../contenedores/contenerArchivo";

// new ContenedorMongo('carritos', ...)
export class ProductoDaoMongo extends ContenedorMongo {
  // constructor(coleccion, esquema) {
  //     this.col = mongoose.model(coleccion, esquema);
  //   }

  constructor() {
    super("productos", {
      productos: { type: Array, required: true },
    });
  }

  // .......
  eliminarStock() {}
}
