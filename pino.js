import pino from "pino";
// * padre
const logger = pino("logger_pino.log");
logger.level = "error";
logger.info("hola del padre");
export default logger;
