import { NestjsWinstonLoggerService } from 'nestjs-winston-logger';
import { format, transports } from 'winston';
import * as winston from 'winston';

export const globalLogger = new NestjsWinstonLoggerService({
  format: format.combine(
    format.timestamp({ format: 'isoDateTime' }),
    format.json(),
    format.colorize({ all: true }),
  ),
  transports: [
    new transports.File({
      filename: 'Logs/error.log',
      level: 'error',
      maxsize: 20,
      maxFiles: 14,
    }),
    // new transports.File({ filename: 'combined.log' }),
    new transports.Console({
      format: winston.format.simple(),
    }),
  ],
});
