import express from "express";
import log4js from "log4js";

log4js.configure({
  appenders: {
    consola: { type: "console" },
    DebugArch: { type: "file", filename: "debug.log" },
    ErrorArch: { type: "file", filename: "errores.log" },
    loggerErrores: {
      appender: "ErrorArch",
      type: "logLevelFilter",
      level: "error",
    },
    loggerDebug: {
      appender: "DebugArch",
      type: "logLevelFilter",
      level: "debug",
    },
  },
  categories: {
    // * prod
    prod: {
      appenders: ["loggerErrores", "loggerDebug"],
      level: "all",
    },
    default: {
      appenders: ["consola"],
      level: "all",
    },

    // * default
  },
});
const app = express();
const logger = log4js.getLogger(
  process.env.NODE_ENV === "PROD" ? "prod" : undefined
);
// * normal ?=
app.get("/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2))
    logger.error("Algun valor ingresado no es numerico");

  logger.info(Number(num1) + Number(num2));
  res.send({ res: Number(num1) + Number(num2) });
});

app.listen(8081, () => console.log("conectado!"));
