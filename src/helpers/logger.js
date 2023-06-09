import { envConfig } from '#configs/env.config';
import { LOG_LEVELS, ENVIRONMENTS } from '#constants/index';

const pretty = require('pino-pretty');
const pino = require('pino');
const pinoExpress = require('express-pino-logger');

const level =
	envConfig.ENV === ENVIRONMENTS.PRODUCTION ?
		LOG_LEVELS.INFO :
		LOG_LEVELS.DEBUG;

export const logger = pino(
    {
      name: 'server',
      level: level || LOG_LEVELS.DEBUG,
      formatters: {
        level(label) {
          return { level: label };
        },
      },
    },
    pretty({
      colorize: true,
      singleLine: false,
      translateTime: 'SYS.standard',
      ignore: 'pid, hostname, module',
    }),
);

export const expressLogger = pinoExpress(
    {
      name: 'express',
      level: level || LOG_LEVELS.INFO,
      formatters: {
        level(label) {
          return { level: label };
        },
      },
      serializers: {
        res: (res) => ({
          status: res.statusCode,
        }),
        req: (req) => ({
          method: req.method,
          url: req.url,
        }),
      },
    },
    pretty({
      colorize: true,
      singleLine: false,
      translateTime: 'SYS.standard',
      ignore: 'pid, hostname, module',
    }),
);
