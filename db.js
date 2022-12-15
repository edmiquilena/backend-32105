import logger from "./pino.js";

const child = logger.child({ method: "db", hola: "mundo" });

child.error("llamada a la base de datos");
