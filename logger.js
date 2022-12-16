import log4js from "log4js";

log4js.configure({
  appenders: {
    consola: { type: "console" },
    // * declaracion
    errorFile: { type: "file", filename: "./logs/errors.log" },
    warnFile: { type: "file", filename: "./logs/warns.log" },

    // * loggers
    loggerError: {
      appender: "errorFile",
      type: "logLevelFilter",
      level: "error",
    },
    loggerWarn: {
      appender: "warnFile",
      type: "logLevelFilter",
      level: "warn",
    },
    loggerConsole: {
      appender: "consola",
      type: "logLevelFilter",
      level: "info",
    },
  },

  categories: {
    default: {
      appenders: ["loggerError", "loggerWarn", "loggerConsole"],
      level: "all",
    },
  },
});
const logger = log4js.getLogger();
export default logger;
