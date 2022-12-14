import winston from "winston";

const loggerProd =
  process.env.NODE_ENV === "PROD"
    ? winston.createLogger({
        level: "info",
        transports: [
          new winston.transports.Console({ level: "error" }),
          new winston.transports.File({ filename: "info.log", level: "error" }),
        ],
      })
    : winston.createLogger({
        level: "info",
        transports: [
          new winston.transports.Console({ level: "error" }),
          new winston.transports.File({ filename: "info.log", level: "error" }),
        ],
      });

export default loggerProd;
