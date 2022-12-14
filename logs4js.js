import log4js from "log4js";

log4js.configure({
  // * appenders
  appenders: {
    loggerConsole: { type: "console" },
    loggerArch: { type: "file", filename: "logger.log" },
    loggerArch2: { type: "file", filename: "logger2.log" },
  },
  // * categorias

  categories: {
    default: {
      appenders: ["loggerConsole"],
      level: "trace",
    },
    dbLog: {
      appenders: ["loggerArch"],
      level: "warn",
    },
    prod: {
      appenders: ["loggerConsole", "loggerArch2"],
      level: "info",
    },
  },
});

const loggerConsole = log4js.getLogger();
loggerConsole.trace("hola trace");
loggerConsole.error("hola error");
loggerConsole.warn();

const loggerDB = log4js.getLogger("dbLog");
loggerDB.trace("hola trace");
loggerDB.error("hola error");
loggerDB.warn("hola warn");
loggerDB.fatal("hola falta");

const loggerProd = log4js.getLogger("prod");
loggerProd.trace("hola trace");
loggerProd.error("hola error");
loggerProd.warn("hola warn");
loggerProd.fatal("hola falta");
